import {FC} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {colors} from 'src/constants';
import styles from 'src/styles/Common.styles';

interface NewsDetailInterface {
  navigation: any;
  route: any;
}

const NewsDetail: FC<NewsDetailInterface> = ({navigation, route}) => {
  const {article} = route.params;
  console.log(article);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <Text style={{color: colors.DARK}}>{article.content}</Text>
    </SafeAreaView>
  );
};

export default NewsDetail;
