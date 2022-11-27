import AsyncStorage from '@react-native-async-storage/async-storage';
import {useContext, useState} from 'react';
import {View, SafeAreaView, useWindowDimensions, Text} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import {Btn} from 'src/components';
import {colors} from 'src/constants';
import {UserContext} from 'src/context/UserContext';
import styles from 'src/styles/Common.styles';

const Profile = () => {
  const {width} = useWindowDimensions();
  const {setUser, setAuthenticated, user} = useContext<any>(UserContext);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const logoutUser = () => {
    AsyncStorage.removeItem('app_user');
    setUser({});
    setAuthenticated(false);
  };

  return (
    <SafeAreaView
      style={[
        styles.rootContainer,
        {alignItems: 'center', justifyContent: 'center'},
      ]}>
      <View style={{width: width * 0.8}}>
        <View style={{alignItems: 'center', marginVertical: 20}}>
          <Text
            style={{
              color: colors.DARK,
              fontSize: 22,
              fontFamily: 'Nunito-Bold',
            }}>
            Hi {user.username},
          </Text>
        </View>
        <Btn handler={() => setShowAlert(true)} label="Logout" />
      </View>
      {/* Alert */}
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title="Are you sure to logout?"
        showCancelButton={true}
        showConfirmButton={true}
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        cancelText="Cancel"
        cancelButtonColor="#A9A9A9"
        confirmButtonColor={colors.PRIMARY}
        onConfirmPressed={logoutUser}
        onCancelPressed={() => setShowAlert(false)}
      />
    </SafeAreaView>
  );
};

export default Profile;
