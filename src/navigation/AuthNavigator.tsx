import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from 'src/constants';
import {Login, Register} from 'src/screens/auth';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.LOGIN} component={Login} />
      <Stack.Screen name={routes.REGISTER} component={Register} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
