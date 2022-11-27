import {FC, useContext, useEffect, useState} from 'react';
import {View, SafeAreaView, useWindowDimensions, Keyboard} from 'react-native';
import {UserContext} from 'src/context/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AlreadyText, Btn, InputGroup, Title} from 'src/components';
import {colors, routes} from 'src/constants';
import styles from 'src/styles/Common.styles';
import AwesomeAlert from 'react-native-awesome-alerts';

interface RegisterInterface {
  navigation: any;
}

const Register: FC<RegisterInterface> = ({navigation}) => {
  const {setUser, setAuthenticated} = useContext<any>(UserContext);
  const {width} = useWindowDimensions();
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>('');

  const registerHandler = () => {
    if (username === '' || email === '' || password === '') {
      setAlertMessage('All fields required');
      setShowAlert(true);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      AsyncStorage.getItem('app_users').then((users: any) => {
        //Adding user to the existing users array
        let existingUsers: any = JSON.parse(users);
        let isExisting = existingUsers.find(
          (existingUser: any) => existingUser.email === email,
        );

        if (isExisting) {
          setAlertMessage('Account already exists');
          setShowAlert(true);
        } else {
          AsyncStorage.setItem(
            'app_users',
            JSON.stringify([...existingUsers, {username, email}]),
          );
          //Setting the current logged in user
          AsyncStorage.setItem(
            'app_user',
            JSON.stringify({username, email, password}),
          );
          setUser({username, email, password});
          setAuthenticated(true);
          setUsername('');
          setEmail('');
          setPassword('');
        }
        setLoading(false);
      });
    }, 3000);
    Keyboard.dismiss();
  };

  useEffect(() => {
    AsyncStorage.getItem('app_user').then(user => console.log(user));
  }, []);

  return (
    <SafeAreaView style={styles.authContainer}>
      <View style={{width: width * 0.8}}>
        <Title title="Register" />
        <InputGroup
          handler={setUsername}
          placeholder="Username"
          value={username}
        />
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
        <Btn loading={loading} handler={registerHandler} label="Register" />
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
          handler={() => navigation.navigate(routes.LOGIN)}
          mainText="Already have an account?"
          subText="Click Here"
        />
      </View>
    </SafeAreaView>
  );
};

export default Register;
