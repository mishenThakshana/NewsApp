import {FC} from 'react';
import {FlatList, Text, View} from 'react-native';
import {routes} from 'src/constants';
import NewsCard2 from './NewsCard2';
import Ionicon from 'react-native-vector-icons/Ionicons';
import styles from 'src/styles/Common.styles';
import React from 'react';

interface VerticalNewsListInterface {
  articles: any;
  onEndReachedHandler?: () => void;
  navigation: any;
  HeaderComponent?: any;
}

const VerticalNewsList: FC<VerticalNewsListInterface> = ({
  articles,
  onEndReachedHandler,
  navigation,
  HeaderComponent,
}) => {
  return articles.length > 0 ? (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={articles}
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
        ListHeaderComponent={HeaderComponent}
      />
    </View>
  ) : (
    <>
      <HeaderComponent />
      <View style={styles.notFoundContainer}>
        <Ionicon name="ios-eye-off-outline" size={26} color="#A9A9A9" />
        <Text style={styles.notFoundLabel}>No articles found</Text>
      </View>
    </>
  );
};

export default VerticalNewsList;
