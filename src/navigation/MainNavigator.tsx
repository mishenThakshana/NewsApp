import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Favourites, Profile} from 'src/screens/main';
import routes from 'src/constants/routes';
import {
  HomeSVG,
  HomeActiveSVG,
  FavouriteSVG,
  FavouriteActiveSVG,
  ProfileSVG,
  ProfileActiveSVG,
} from 'src/assets/images/icons';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          paddingTop: 5,
          bottom: 25,
          left: 20,
          right: 20,
          position: 'absolute',
          elevation: 5,
          borderRadius: 32,
        },
        tabBarLabelStyle: {
          paddingVertical: 5,
          fontFamily: 'Nunito-Regular',
        },
        tabBarActiveTintColor: '#000',
      }}>
      <Tab.Screen
        name={routes.HOME}
        component={Home}
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
