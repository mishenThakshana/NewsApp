import AppNavigator from 'src/navigation/AppNavigator';
import {UserProvider} from 'src/context/UserContext';

const App = () => {
  return (
    <UserProvider>
      <AppNavigator />
    </UserProvider>
  );
};

export default App;
