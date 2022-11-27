import {FC, useEffect, useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import {
  FilterBtnList,
  FilterModal,
  TitleWithFilter,
  VerticalNewsList,
} from 'src/components';
import {categories, countries, languages} from 'src/data/data';
import {protectedHttp} from 'src/helpers/HttpHelper';
import styles from 'src/styles/Common.styles';

interface AllNewsInterface {
  navigation: any;
}

const AllNews: FC<AllNewsInterface> = ({navigation}) => {
  const [categoryArticles, setCategoryArticles] = useState<any>([]);
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
  const [activeLanguage, setActiveLanguage] = useState<string>(languages[2]);
  const [activeCountry, setActiveCountry] = useState<string>(countries[51]);
  const [categoryPage, setCategoryPage] = useState<number>(1);
  const [modalVisible, setModalVisible] = useState(false);
  // loaders
  const [loadingCategoryNews, setLoadingCategoryNews] =
    useState<boolean>(false);

  const getCategoryNews = () => {
    categoryPage < 2 && setLoadingCategoryNews(true);
    protectedHttp
      .get(
        `/top-headlines?country=${activeCountry}&language=${activeLanguage}&category=${activeCategory}&pageSize=10&page=${categoryPage}`,
      )
      .then(res => {
        if (categoryPage > 1) {
          setCategoryArticles([...categoryArticles, ...res.data.articles]);
        } else {
          setCategoryArticles([]);
          setCategoryArticles(res.data.articles);
        }
      })
      .finally(() => setLoadingCategoryNews(false));
  };

  useEffect(() => {
    getCategoryNews();
  }, [categoryPage]);

  useEffect(() => {
    setCategoryPage(1);
    getCategoryNews();
  }, [activeCategory, activeCountry, activeLanguage]);

  const loadMoreCategoryNews = () => {
    setCategoryPage(categoryPage + 1);
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={{margin: 20}}>
        {/* Filter */}
        <TitleWithFilter
          navigation={navigation}
          handler={() => setModalVisible(!modalVisible)}
          title="All News"
          backEnabled
        />
        {/* Categories */}
        <FilterBtnList
          activeFilter={activeCategory}
          setActiveFilter={(item: string) => setActiveCategory(item)}
          labels={categories}
        />
        {categoryArticles && (
          <VerticalNewsList
            loading={loadingCategoryNews}
            navigation={navigation}
            articles={categoryArticles}
            onEndReachedHandler={loadMoreCategoryNews}
          />
        )}
      </View>
      {/* Modal */}
      <FilterModal
        visible={modalVisible}
        visibilityHandler={setModalVisible}
        activeCountry={activeCountry}
        setActiveCountry={setActiveCountry}
        activeLang={activeLanguage}
        setActiveLang={setActiveLanguage}
      />
    </SafeAreaView>
  );
};

export default AllNews;
