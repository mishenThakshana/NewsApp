import {FC} from 'react';
import {ActivityIndicator, FlatList, useWindowDimensions} from 'react-native';
import {colors} from 'src/constants';
import NewsCard2 from './NewsCard2';

interface VerticalNewsListInterface {
  articles: any;
}

const VerticalNewsList: FC<VerticalNewsListInterface> = ({articles}) => {
  const {height} = useWindowDimensions();
  return articles.length > 0 ? (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={articles}
      style={{height: height * 0.4}}
      renderItem={({item}) => (
        <NewsCard2
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

export default VerticalNewsList;