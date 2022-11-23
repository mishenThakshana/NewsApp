import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {colors} from 'src/constants';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import {useContext, useEffect, useState} from 'react';
import {UserContext} from 'src/context/UserContext';

const AppNavigator = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const {authenticated} = useContext<any>(UserContext);

  useEffect(() => {
    authenticated && setLoggedIn(true);
  }, [authenticated]);

  return (
    <>
      <StatusBar backgroundColor={colors.PRIMARY} barStyle="light-content" />
      <NavigationContainer>
        {loggedIn ? <MainNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </>
  );
};

export default AppNavigator;
