import {FC} from 'react';
import {
  ActivityIndicator,
  FlatList,
  useWindowDimensions,
  Text,
  View,
} from 'react-native';
import {colors, routes} from 'src/constants';
import NewsCard2 from './NewsCard2';
import Ionicon from 'react-native-vector-icons/Ionicons';
import styles from 'src/styles/Common.styles';

interface VerticalNewsListInterface {
  articles: any;
  onEndReachedHandler?: () => void;
  navigation: any;
  loading: boolean;
}

const VerticalNewsList: FC<VerticalNewsListInterface> = ({
  articles,
  onEndReachedHandler,
  navigation,
  loading,
}) => {
  const {height} = useWindowDimensions();

  return !loading ? (
    articles.length > 0 ? (
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
        initialNumToRender={5}
      />
    ) : (
      <View style={styles.notFoundContainer}>
        <Ionicon name="ios-eye-off-outline" size={26} color="#A9A9A9" />
        <Text style={styles.notFoundLabel}>No articles found</Text>
      </View>
    )
  ) : (
    <ActivityIndicator color={colors.PRIMARY} size={33} />
  );
};

export default VerticalNewsList;
