import { createStackNavigator } from 'react-navigation-stack';

import RegisterScreen from '../screens/Register';

const RegisterStack = createStackNavigator(
  {
    Register: RegisterScreen,
  },
  {
    initialRouteName: 'Register',
  },
);

export default RegisterStack;
