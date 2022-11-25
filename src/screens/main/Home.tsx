import {useCallback, useEffect, useState} from 'react';
import {RefreshControl, SafeAreaView, ScrollView, View} from 'react-native';
import {
  HorizontalNewsList,
  VerticalNewsList,
  SectionTitle,
  Topbar,
  FilterBtnList,
} from 'src/components';
import {colors} from 'src/constants';
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

const Home = () => {
  const [articles, setArticles] = useState<any>([]);
  const [categoryArticles, setCategoryArticles] = useState<any>([]);
  const [activeFilter, setActiveFilter] = useState<string>(labels[0]);

  const getBreakingNews = () =>
    protectedHttp.get('/top-headlines?country=us&pageSize=5').then(res => {
      setArticles(res.data.articles);
    });

  const getCategoryNews = () =>
    protectedHttp
      .get(`/top-headlines?category=${activeFilter}&pageSize=5`)
      .then(res => {
        setCategoryArticles(res.data.articles);
      });

  useEffect(() => {
    getBreakingNews();
  }, []);

  useEffect(() => {
    getCategoryNews();
  }, [activeFilter]);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={{margin: 20}}>
        <Topbar />
        <SectionTitle title="Breaking News" />
        {/* Breaking News */}
        {articles && <HorizontalNewsList articles={articles} />}
        {/* Category news */}
        <FilterBtnList
          activeFilter={activeFilter}
          setActiveFilter={(item: string) => setActiveFilter(item)}
          labels={labels}
        />
        {categoryArticles && <VerticalNewsList articles={categoryArticles} />}
      </View>
    </SafeAreaView>
  );
};

export default Home;
