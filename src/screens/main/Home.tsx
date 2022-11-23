import {useContext} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {UserContext} from 'src/context/UserContext';

const Home = () => {
  const {user} = useContext<any>(UserContext);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={{color: '#000'}}>{user.email}</Text>
    </SafeAreaView>
  );
};

export default Home;
