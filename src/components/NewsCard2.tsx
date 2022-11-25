import {formatDistance} from 'date-fns';
import {FC} from 'react';
import {View, Text, ImageBackground, useWindowDimensions} from 'react-native';
import {colors} from 'src/constants';
import {firstLetterCapital} from 'src/helpers/FunctionHelper';
import styles from 'src/styles/Common.styles';

export interface NewsCard2Interface {
  author: string;
  title: string;
  publishedAt: string;
  urlToImage: string;
}

const NewsCard2: FC<NewsCard2Interface> = article => {
  const {width} = useWindowDimensions();
  return (
    <View style={{alignItems: 'center', marginBottom: 5}}>
      <ImageBackground
        style={{width: width * 0.9, height: 150}}
        imageStyle={{borderRadius: 10}}
        source={{uri: article.urlToImage}}
        resizeMode="contain">
        <View style={styles.newsCard2Container}>
          <View>
            <Text style={styles.newsCard2Title}>{article.title}</Text>
          </View>
          <View style={styles.newsCard2BottomContainer}>
            <View>
              <Text style={styles.newsCard2BottomText}>{article.author}</Text>
            </View>
            <View>
              <Text style={styles.newsCard2BottomText}>
                {firstLetterCapital(
                  formatDistance(new Date(article.publishedAt), Date.now()),
                )}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default NewsCard2;
