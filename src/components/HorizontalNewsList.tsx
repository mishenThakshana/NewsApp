import {FC} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {colors, routes} from 'src/constants';
import NewsCard from './NewsCard';

interface HorizontalNewsListInterface {
  articles: any;
  navigation: any;
  loading: boolean;
}

const HorizontalNewsList: FC<HorizontalNewsListInterface> = ({
  articles,
  navigation,
  loading,
}) => {
  return !loading ? (
    <View>
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
            handler={() =>
              navigation.navigate(routes.NEWS_DETAIL, {article: item})
            }
          />
        )}
        keyExtractor={item => item.title}
        initialNumToRender={5}
      />
    </View>
  ) : (
    <ActivityIndicator color={colors.PRIMARY} size={33} />
  );
};

export default HorizontalNewsList;
