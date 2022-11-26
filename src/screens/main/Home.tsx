import {FC, useEffect, useState} from 'react';
import {Modal, Pressable, SafeAreaView, Text, View} from 'react-native';
import {
  HorizontalNewsList,
  VerticalNewsList,
  SectionTitle,
  Topbar,
  FilterBtnList,
  TitleWithFilter,
} from 'src/components';
import {protectedHttp} from 'src/helpers/HttpHelper';
import styles from 'src/styles/Common.styles';
import {categories, languages, countries} from 'src/data/data';
interface HomeInterface {
  navigation: any;
}

const Home: FC<HomeInterface> = ({navigation}) => {
  const [articles, setArticles] = useState<any>([]);
  const [categoryArticles, setCategoryArticles] = useState<any>([]);
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
  const [activeLanguage, setActiveLanguage] = useState<string>(languages[2]);
  const [activeCountry, setActiveCountry] = useState<string>(countries[51]);
  const [categoryPage, setCategoryPage] = useState<number>(1);
  const [modalVisible, setModalVisible] = useState(false);
  // loaders
  const [loadingCategoryNews, setLoadingCategoryNews] =
    useState<boolean>(false);

  const getBreakingNews = () =>
    protectedHttp.get('/top-headlines?country=us&pageSize=5').then(res => {
      setArticles(res.data.articles);
    });

  const getCategoryNews = () => {
    categoryPage < 2 && setLoadingCategoryNews(true);
    protectedHttp
      .get(
        `/top-headlines?country=${activeCountry}&language=${activeLanguage}&category=${activeCategory}&pageSize=5&page=${categoryPage}`,
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
    getBreakingNews();
  }, []);

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
    <SafeAreaView
      style={[
        styles.rootContainer,
        modalVisible && {opacity: 0.5, backgroundColor: 'rgba(0,0,0,0)'},
      ]}>
      <View style={{margin: 20}}>
        <Topbar navigation={navigation} />
        <SectionTitle title="Breaking News" />
        {/* Breaking News */}
        {articles && (
          <HorizontalNewsList navigation={navigation} articles={articles} />
        )}
        {/* Category news */}
        {/* Filter */}
        <TitleWithFilter
          handler={() => setModalVisible(!modalVisible)}
          title="Top News"
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.bottomSheetContainer}>
          <Text
            style={{
              fontFamily: 'Nunito-Bold',
              color: '#000',
              fontSize: 16,
            }}>
            Language
          </Text>
          {/* Languages */}
          <FilterBtnList
            activeFilter={activeLanguage}
            setActiveFilter={(item: string) => setActiveLanguage(item)}
            labels={languages}
          />
          <Text
            style={{
              fontFamily: 'Nunito-Bold',
              color: '#000',
              fontSize: 16,
            }}>
            Country
          </Text>
          {/* Countries */}
          <FilterBtnList
            activeFilter={activeCountry}
            setActiveFilter={(item: string) => setActiveCountry(item)}
            labels={countries}
          />
          {/* Filter Btn */}
          <Pressable onPress={() => setModalVisible(!modalVisible)}>
            <View style={styles.filterBtnContainer}>
              <Text style={styles.filterBtnSm}>Save Filters</Text>
            </View>
          </Pressable>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Home;
