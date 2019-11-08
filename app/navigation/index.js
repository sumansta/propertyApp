import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from '../screens/Login';

import RegisterStack from './RegisterStack';
import BottomNavigationStack from './BottomNavigationStack';

const NavigationStack = createSwitchNavigator(
  {
    Auth: Login,
    Dashboard: BottomNavigationStack,
    Register: RegisterStack,
  },
  {
    initialRouteName: 'Auth',
  },
);

const App = createAppContainer(NavigationStack);

export default App;
