import {FC} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import {colors} from 'src/constants';
import styles from 'src/styles/Common.styles';
import MaterialIcon from 'react-native-vector-icons/Ionicons';

interface NewsDetailInterface {
  navigation: any;
  route: any;
}

const NewsDetail: FC<NewsDetailInterface> = ({navigation, route}) => {
  const {article} = route.params;
  const {width, height} = useWindowDimensions();

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View
        style={{
          zIndex: 10,
          backgroundColor: 'rgba(245, 245, 245,0.5)',
          alignSelf: 'flex-start',
          margin: 15,
          padding: 8,
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcon
            onPress={() => navigation.goBack()}
            name="arrow-back-outline"
            color={colors.DARK}
            size={22}
          />
        </TouchableOpacity>
      </View>
      <Image
        style={{position: 'absolute', width, height: height * 0.4}}
        source={{uri: article.urlToImage}}
        resizeMode="cover"
      />
      {/* Shadow Box */}
      <View
        style={{
          position: 'absolute',
          top: 250,
          alignItems: 'center',
          width,
          zIndex: 10,
        }}>
        <View
          style={{
            width: 311,
            height: 141,
            backgroundColor: 'rgba(245, 245, 245,0.9)',
            borderRadius: 16,
          }}></View>
      </View>
      {/* body */}
      <View
        style={{
          width,
          backgroundColor: colors.LIGHT,
          height,
          position: 'absolute',
          top: 300,
          borderTopRightRadius: 24,
          borderTopLeftRadius: 24,
        }}></View>
    </SafeAreaView>
  );
};

export default NewsDetail;
