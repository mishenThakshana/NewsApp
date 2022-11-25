import {FC} from 'react';
import {FlatList} from 'react-native';
import NewsCard from './NewsCard';

interface BreakingNewsInterface {
  articles: any;
}

const BreakingNews: FC<BreakingNewsInterface> = ({articles}) => {
  return (
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
  );
};

export default BreakingNews;
