import {FC, useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {
  HorizontalNewsList,
  VerticalNewsList,
  SectionTitle,
  Topbar,
  FilterBtnList,
  TitleWithFilter,
  FilterModal,
} from 'src/components';
import {protectedHttp} from 'src/helpers/HttpHelper';
import styles from 'src/styles/Common.styles';
import {categories, languages, countries} from 'src/data/data';
import {colors, routes} from 'src/constants';
import AwesomeAlert from 'react-native-awesome-alerts';

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
  const [loadingBreakingNews, setLoadingBreakingNews] =
    useState<boolean>(false);
  // Error handling
  const [errorAlert, setErrorAlert] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const getBreakingNews = () => {
    setLoadingBreakingNews(true);
    protectedHttp
      .get('/top-headlines?country=us&pageSize=5')
      .then(res => {
        setArticles(res.data.articles);
      })
      .catch(error => {
        setErrorAlert(true);
        setErrorMessage(error.response.data.message);
      })
      .finally(() => setLoadingBreakingNews(false));
  };

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
      .catch(error => {
        setErrorAlert(true);
        setErrorMessage(error.response.data.message);
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
        <SectionTitle
          handler={() => navigation.navigate(routes.ALL_NEWS)}
          title="Breaking News"
        />
        {/* Breaking News */}
        {articles && (
          <HorizontalNewsList
            loading={loadingBreakingNews}
            navigation={navigation}
            articles={articles}
          />
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
      <FilterModal
        visible={modalVisible}
        visibilityHandler={setModalVisible}
        activeCountry={activeCountry}
        setActiveCountry={setActiveCountry}
        activeLang={activeLanguage}
        setActiveLang={setActiveLanguage}
      />
      {/* Error Alert */}
      <AwesomeAlert
        show={errorAlert}
        showProgress={false}
        title="Unexpetected Error"
        message={errorMessage}
        showCancelButton={false}
        showConfirmButton={true}
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        confirmButtonColor={colors.PRIMARY}
        onConfirmPressed={() => {
          setErrorAlert(false);
          setErrorMessage('');
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
