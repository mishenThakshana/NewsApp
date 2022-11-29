import React, {FC} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {colors, routes} from 'src/constants';
import NewsCard from './NewsCard';
import Ionicon from 'react-native-vector-icons/Ionicons';
import styles from 'src/styles/Common.styles';

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
    articles.length > 0 ? (
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
      <View style={styles.notFoundContainer}>
        <Ionicon name="ios-eye-off-outline" size={26} color="#A9A9A9" />
        <Text style={styles.notFoundLabel}>No articles found</Text>
      </View>
    )
  ) : (
    <ActivityIndicator color={colors.PRIMARY} size={33} />
  );
};

export default HorizontalNewsList;
