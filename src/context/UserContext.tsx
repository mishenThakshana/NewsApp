import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, FC, ReactNode, useEffect, useState} from 'react';

export const UserContext = createContext({});

type UserProviderChildren = {
  children: ReactNode;
};

export const UserProvider: FC<UserProviderChildren> = ({children}) => {
  const [user, setUser] = useState<object>({});
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  const getLoggedInUser = () => {
    AsyncStorage.getItem('app_user').then((existingUser: any) => {
      if (existingUser !== null) {
        setUser(JSON.parse(existingUser));
        setAuthenticated(true);
      }
    });
  };

  useEffect(() => {
    getLoggedInUser();
  }, []);

  return (
    <UserContext.Provider
      value={{user, setUser, authenticated, setAuthenticated}}>
      {children}
    </UserContext.Provider>
  );
};
