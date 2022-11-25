import {FC, useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
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

const labels = [
  'Health',
  'Technology',
  'Sports',
  'Business',
  'Entertainment',
  'Science',
  'General',
];

interface HomeInterface {
  navigation: any;
}

const Home: FC<HomeInterface> = ({navigation}) => {
  const [articles, setArticles] = useState<any>([]);
  const [categoryArticles, setCategoryArticles] = useState<any>([]);
  const [activeFilter, setActiveFilter] = useState<string>(labels[0]);
  const [categoryPage, setCategoryPage] = useState<number>(1);

  const getBreakingNews = () =>
    protectedHttp.get('/top-headlines?country=us&pageSize=5').then(res => {
      setArticles(res.data.articles);
    });

  const getCategoryNews = () =>
    protectedHttp
      .get(
        `/top-headlines?category=${activeFilter}&pageSize=5&page=${categoryPage}`,
      )
      .then(res => {
        if (categoryPage > 1) {
          setCategoryArticles([...categoryArticles, ...res.data.articles]);
        } else {
          setCategoryArticles(res.data.articles);
        }
      });

  useEffect(() => {
    getBreakingNews();
  }, []);

  useEffect(() => {
    getCategoryNews();
  }, [categoryPage]);

  useEffect(() => {
    setCategoryArticles([]);
    setCategoryPage(1);
    getCategoryNews();
  }, [activeFilter]);

  const loadMoreCategoryNews = () => {
    setCategoryPage(categoryPage + 1);
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={{margin: 20}}>
        <Topbar navigation={navigation} />
        <SectionTitle title="Breaking News" />
        {/* Breaking News */}
        {articles && (
          <HorizontalNewsList navigation={navigation} articles={articles} />
        )}
        {/* Category news */}
        {/* Filter */}
        <TitleWithFilter title="Top News" />
        {/* Categories */}
        <FilterBtnList
          activeFilter={activeFilter}
          setActiveFilter={(item: string) => setActiveFilter(item)}
          labels={labels}
        />
        {categoryArticles && (
          <VerticalNewsList
            navigation={navigation}
            articles={categoryArticles}
            onEndReachedHandler={loadMoreCategoryNews}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
