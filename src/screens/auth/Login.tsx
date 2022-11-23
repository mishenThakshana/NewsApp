import {FC, useContext, useEffect, useState} from 'react';
import {View, SafeAreaView, useWindowDimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AlreadyText, Btn, InputGroup, Title} from 'src/components';
import {colors, routes} from 'src/constants';
import styles from 'src/styles/Common.styles';
import AwesomeAlert from 'react-native-awesome-alerts';
import {UserContext} from 'src/context/UserContext';

interface LoginInterface {
  navigation: any;
}

const Login: FC<LoginInterface> = ({navigation}) => {
  const {setUser, setAuthenticated} = useContext<any>(UserContext);
  const {width} = useWindowDimensions();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>('');

  // Initializing users
  useEffect(() => {
    AsyncStorage.getItem('app_users').then(users => {
      users === null && AsyncStorage.setItem('app_users', JSON.stringify([]));
    });
  }, []);

  const loginHandler = () => {
    if (email === '' || password === '') {
      setAlertMessage('All fields required');
      setShowAlert(true);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      AsyncStorage.getItem('app_users').then((users: any) => {
        //Adding user to the existing users array
        let existingUsers: any = JSON.parse(users);
        let existingUser = existingUsers.find(
          (existingUser: any) => existingUser.email === email,
        );

        if (existingUser) {
          if (existingUser.password === password) {
            //Setting the current logged in user
            AsyncStorage.setItem('app_user', JSON.stringify({email, password}));
            setUser({email, password});
            setAuthenticated(true);
            setEmail('');
            setPassword('');
          } else {
            setAlertMessage('Incorrect Credentials');
            setShowAlert(true);
          }
        } else {
          setAlertMessage('User not found');
          setShowAlert(true);
        }
        setLoading(false);
      });
    }, 3000);
  };

  return (
    <SafeAreaView style={styles.authContainer}>
      <View style={{width: width * 0.8}}>
        <Title title="Log in" />
        <InputGroup
          type="email"
          handler={setEmail}
          placeholder="Email"
          value={email}
        />
        <InputGroup
          type="password"
          handler={setPassword}
          placeholder="Password"
          value={password}
        />
        <Btn loading={loading} handler={loginHandler} label="Login" />
        {/* Alert Component*/}
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="Unexpected error occured"
          message={alertMessage}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          cancelText="Okay"
          cancelButtonColor={colors.PRIMARY}
          onCancelPressed={() => setShowAlert(false)}
        />
        <AlreadyText
          handler={() => navigation.navigate(routes.REGISTER)}
          mainText="Register a new account?"
          subText="Click Here"
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;
