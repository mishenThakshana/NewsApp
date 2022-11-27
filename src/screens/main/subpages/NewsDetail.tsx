import {FC} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  useWindowDimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import {colors} from 'src/constants';
import styles from 'src/styles/Common.styles';
import MaterialIcon from 'react-native-vector-icons/Ionicons';
import {firstLetterCapital} from 'src/helpers/FunctionHelper';
import {formatDistance} from 'date-fns';
import FastImage from 'react-native-fast-image';

interface NewsDetailInterface {
  navigation: any;
  route: any;
}

const NewsDetail: FC<NewsDetailInterface> = ({navigation, route}) => {
  const {article} = route.params;
  const {width, height} = useWindowDimensions();

  return (
    <SafeAreaView style={styles.rootContainer}>
      {/* Back btn */}
      <View style={styles.newsDetailBackBtn}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcon
            onPress={() => navigation.goBack()}
            name="arrow-back-outline"
            color={colors.DARK}
            size={22}
          />
        </TouchableOpacity>
      </View>
      {/* Image */}
      <FastImage
        style={{position: 'absolute', width, height: height * 0.4}}
        source={{uri: article.urlToImage}}
        resizeMode={FastImage.resizeMode.cover}
      />
      {/* Shadow Box Container*/}
      <View style={[styles.newsDetailShadowBoxContainer, {width}]}>
        {/* Shdow Box */}
        <View style={styles.newsDetailShadowBox}>
          {/* Timestamp */}
          <Text style={styles.newsDetailTimeStamp}>
            {firstLetterCapital(
              formatDistance(new Date(article.publishedAt), Date.now()),
            )}
          </Text>
          {/* Title */}
          <Text style={styles.newsDetailTitle}>{article.title}</Text>
          {/* Author */}
          {article.author && (
            <Text style={styles.newsDetailAuthor}>
              Published by {article.author}
            </Text>
          )}
        </View>
      </View>
      {/* body */}
      <View
        style={[styles.newsDetailDescriptionOuterContainer, {width, height}]}>
        <View style={[styles.newsDetailDescriptionContainer, {width}]}>
          <Text style={styles.newsDetailDescription}>
            {article.description}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NewsDetail;
