import {FC} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {colors} from 'src/constants';
import NewsCard from './NewsCard';

interface BreakingNewsInterface {
  articles: any;
}

const BreakingNews: FC<BreakingNewsInterface> = ({articles}) => {
  return articles.length > 0 ? (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={articles}
      renderItem={({item}) => (
        <NewsCard
          author={item.author}
          title={item.title}
          publishedAt={item.publishedAt}
          urlToImage={item.urlToImage}
        />
      )}
      keyExtractor={item => item.title}
    />
  ) : (
    <ActivityIndicator color={colors.PRIMARY} size={33} />
  );
};

export default BreakingNews;