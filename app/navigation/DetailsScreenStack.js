import {createStackNavigator} from 'react-navigation-stack';

import DetailsScreen from '../screens/Details';
import CarouselScreen from '../screens/Carousel';

const DetailsScreenStack = createStackNavigator(
  {
    DetailsScreen: {
      screen: DetailsScreen,
    },
    CarouselScreen: {
      screen: CarouselScreen,
    },
  },
  {
    initialRouteKey: DetailsScreen,
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export default DetailsScreenStack;
