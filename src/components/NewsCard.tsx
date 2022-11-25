import {FC} from 'react';
import {
  View,
  Text,
  ImageBackground,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import {formatDistance} from 'date-fns';
import {firstLetterCapital} from 'src/helpers/FunctionHelper';
import styles from 'src/styles/Common.styles';

export interface NewsCardInterface {
  author: string;
  title: string;
  publishedAt: string;
  urlToImage: string;
  handler: () => void;
}

const NewsCard: FC<NewsCardInterface> = article => {
  const {width, height} = useWindowDimensions();
  return (
    <TouchableOpacity onPress={article.handler}>
      <View style={{marginRight: 5}}>
        <ImageBackground
          style={{width: width * 0.8, height: height * 0.3}}
          imageStyle={{borderRadius: 10}}
          source={{uri: article.urlToImage}}
          resizeMode="contain">
          <View style={styles.newsCardContainer}>
            {article.author && (
              <View>
                <Text style={styles.newsCardAuthorText}>
                  by {article.author}
                </Text>
              </View>
            )}
            <View>
              <Text style={styles.newsCardTitle}>{article.title}</Text>
            </View>
            <View style={styles.newsCardTimestampContainer}>
              <Text style={styles.newsCardTimestamp}>
                {firstLetterCapital(
                  formatDistance(new Date(article.publishedAt), Date.now()),
                )}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default NewsCard;
