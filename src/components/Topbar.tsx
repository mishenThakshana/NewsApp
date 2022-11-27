import {FC, useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import {protectedHttp} from 'src/helpers/HttpHelper';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {colors, routes} from 'src/constants';
import {NotificationsImg} from 'src/assets/images/icons';
import styles from 'src/styles/Common.styles';
import debounce from 'lodash.debounce';

interface TopbarInterface {
  navigation: any;
}

const Topbar: FC<TopbarInterface> = ({navigation}) => {
  const [titles, setTitles] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [textContained, setTextContained] = useState<boolean>(false);
  const inpRef = useRef<TextInput>(null);

  const searchNews = debounce(value => {
    setLoading(true);
    if (value == '') {
      setTitles([]);
      setLoading(false);
      setTextContained(false);
      Keyboard.dismiss();
      return;
    } else {
      setTextContained(true);
      protectedHttp
        .get(`/everything?searchIn=title&q=${value}&from=2022-11-23&pageSize=5`)
        .then(res => {
          let arr: any = [];
          res.data.articles.map((article: any) => {
            arr.push(article);
          });
          setTitles(arr);
        })
        .finally(() => setLoading(false));
    }
  }, 500);

  return (
    <>
      <View style={styles.topBarContainer}>
        {/* Searchbar */}
        <View style={styles.topBarSearchBar}>
          <View>
            <TextInput
              ref={inpRef}
              onChangeText={searchNews}
              placeholder="Dogecoin to the moon..."
              placeholderTextColor="rgba(0, 0, 0, 0.2)"
              style={styles.topBarSearchBarInput}
              cursorColor={colors.PRIMARY}
            />
          </View>
          <View>
            {loading ? (
              <ActivityIndicator color={colors.PRIMARY} size={24} />
            ) : textContained ? (
              <Ionicon
                onPress={() => {
                  setTitles([]);
                  inpRef.current?.clear();
                  setTextContained(false);
                  Keyboard.dismiss();
                }}
                name="ios-close-outline"
                color="#A9A9A9"
                size={22}
              />
            ) : (
              <Ionicon name="ios-search-outline" color="#A9A9A9" size={22} />
            )}
          </View>
        </View>
        {/* Notifications */}
        <View>
          <Image
            style={{width: 45, height: 50, marginLeft: 10}}
            source={NotificationsImg}
            resizeMode="contain"
          />
        </View>
      </View>
      {/* Search List */}
      {titles.length > 0 && (
        <FlatList
          data={titles}
          style={styles.searchListContainer}
          initialNumToRender={5}
          renderItem={({item, index}) => {
            return (
              <>
                <View style={{padding: 5}}>
                  <Text
                    onPress={() =>
                      navigation.navigate(routes.NEWS_DETAIL, {article: item})
                    }
                    style={{color: colors.DARK}}>
                    {item.title}
                  </Text>
                </View>
                {index !== 4 && (
                  <View style={styles.searchListHorizontalLine} />
                )}
              </>
            );
          }}
        />
      )}
    </>
  );
};

export default Topbar;
