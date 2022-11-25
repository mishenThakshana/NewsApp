import {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {BreakingNews, SectionTitle, Topbar} from 'src/components';
import {protectedHttp} from 'src/helpers/HttpHelper';
import styles from 'src/styles/Common.styles';

const Home = () => {
  const [articles, setArticles] = useState<any>([]);

  useEffect(() => {
    protectedHttp.get('/top-headlines?country=us&pageSize=5').then(res => {
      setArticles(res.data.articles);
    });
  }, []);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={{margin: 20}}>
        <Topbar />
        <SectionTitle title="Breaking News" />
        {/* Breaking News */}
        {articles && <BreakingNews articles={articles} />}
      </View>
    </SafeAreaView>
  );
};

export default Home;
