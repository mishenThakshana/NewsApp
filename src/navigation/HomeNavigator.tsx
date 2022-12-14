import React, {FC, useLayoutEffect} from 'react';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from 'src/constants';
import {AllNews, Home, NewsDetail} from 'src/screens/main';
import styles from 'src/styles/Common.styles';

const Stack = createNativeStackNavigator();

interface HomeNavigatorInterface {
  navigation: any;
  route: any;
}

const HomeNavigator: FC<HomeNavigatorInterface> = ({navigation, route}) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === routes.NEWS_DETAIL) {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({
        tabBarStyle: styles.tabBarStyle,
      });
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.HOME} component={Home} />
      <Stack.Screen name={routes.NEWS_DETAIL} component={NewsDetail} />
      <Stack.Screen name={routes.ALL_NEWS} component={AllNews} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
