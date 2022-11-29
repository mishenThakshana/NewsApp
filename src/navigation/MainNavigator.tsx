import React from 'react';
import {Platform} from 'react-native';
import {Favourites, Profile} from 'src/screens/main';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import routes from 'src/constants/routes';
import {
  HomeSVG,
  HomeActiveSVG,
  FavouriteSVG,
  FavouriteActiveSVG,
  ProfileSVG,
  ProfileActiveSVG,
} from 'src/assets/images/icons';
import HomeNavigator from './HomeNavigator';
import styles from 'src/styles/Common.styles';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: {
          top: Platform.OS === 'ios' ? 20 : 0,
          paddingVertical: 5,
          fontFamily: 'Nunito-Regular',
        },
        tabBarIconStyle: {top: Platform.OS === 'ios' ? 10 : 0}, //
        tabBarActiveTintColor: '#000',
      }}>
      <Tab.Screen
        name={routes.HOME_NAVIGATOR}
        component={HomeNavigator}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return focused ? (
              <HomeActiveSVG width={26} height={26} />
            ) : (
              <HomeSVG width={26} height={26} />
            );
          },
        }}
      />
      <Tab.Screen
        name={routes.FAVOURITES}
        component={Favourites}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return focused ? (
              <FavouriteActiveSVG width={26} height={26} />
            ) : (
              <FavouriteSVG width={26} height={26} />
            );
          },
        }}
      />
      <Tab.Screen
        name={routes.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return focused ? (
              <ProfileActiveSVG width={26} height={26} />
            ) : (
              <ProfileSVG width={26} height={26} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
