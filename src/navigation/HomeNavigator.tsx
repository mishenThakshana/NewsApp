import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from 'src/constants';
import {Home, NewsDetail} from 'src/screens/main';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.HOME} component={Home} />
      <Stack.Screen name={routes.NEWS_DETAIL} component={NewsDetail} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
