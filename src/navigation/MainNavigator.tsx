import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {colors} from 'src/constants';
import AuthNavigator from './AuthNavigator';

const MainNavigator = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.PRIMARY} barStyle="light-content" />
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </>
  );
};

export default MainNavigator;
