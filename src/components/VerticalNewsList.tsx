import {FC} from 'react';
import {ActivityIndicator, FlatList, useWindowDimensions} from 'react-native';
import {colors, routes} from 'src/constants';
import NewsCard2 from './NewsCard2';

interface VerticalNewsListInterface {
  articles: any;
  onEndReachedHandler?: () => void;
  navigation: any;
}

const VerticalNewsList: FC<VerticalNewsListInterface> = ({
  articles,
  onEndReachedHandler,
  navigation,
}) => {
  const {height} = useWindowDimensions();
  return articles.length > 0 ? (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={articles}
      style={{height: height * 0.45}}
      renderItem={({item}) => (
        <NewsCard2
          handler={() =>
            navigation.navigate(routes.NEWS_DETAIL, {article: item})
          }
          author={item.author}
          title={item.title}
          publishedAt={item.publishedAt}
          urlToImage={item.urlToImage}
        />
      )}
      keyExtractor={item => item.title}
      onEndReachedThreshold={0}
      onEndReached={onEndReachedHandler}
    />
  ) : (
    <ActivityIndicator color={colors.PRIMARY} size={33} />
  );
};

export default VerticalNewsList;
