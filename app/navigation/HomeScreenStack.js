import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../screens/Home';
import DetailsScreenStack from './DetailsScreenStack';

const HomeScreenStack = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
    DetailsScreen: {screen: DetailsScreenStack},
  },
  {
    initialRouteKey: HomeScreen,
    defaultNavigationOptions: {
      headerTransparent: true,
    },
  },
);

export default HomeScreenStack;
