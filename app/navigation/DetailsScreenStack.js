import React from 'react';
import {Text} from 'react-native';

import {createStackNavigator} from 'react-navigation-stack';

import DetailsScreen from '../screens/Details';
import CarouselScreen from '../screens/Carousel';

const DetailsScreenStack = createStackNavigator(
  {
    DetailsScreen: {
      screen: DetailsScreen,
      navigationOptions: {
        header: () => {
          <CustomHeader />;
        },
      },
    },
    CarouselScreen: {
      screen: CarouselScreen,
    },
  },
  {
    initialRouteKey: DetailsScreen,
    defaultNavigationOptions: {
      headerTransparent: true,
    },
  },
);

const CustomHeader = () => {
  return <Text>Back</Text>;
};

export default DetailsScreenStack;
