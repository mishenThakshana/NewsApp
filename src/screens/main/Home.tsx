import {useEffect} from 'react';
import {Image, SafeAreaView, Text, TextInput, View} from 'react-native';
import {Topbar} from 'src/components';
import {protectedHttp} from 'src/helpers/HttpHelper';
import styles from 'src/styles/Common.styles';

const Home = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={{margin: 20}}>
        <Topbar />
      </View>
    </SafeAreaView>
  );
};

export default Home;
