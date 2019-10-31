import React from 'react';
import {View} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import AppStyles from '../config/styles';

import HomeScreen from '../screens/Home';
import DiscoverScreen from '../screens/Discover';
import FavouriteScreen from '../screens/Favourite';
import ScheduleScreen from '../screens/Schedule';
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
      headerStyle: {
        backgroundColor: AppStyles.color.DEFAULT_BLUE,
      },
      headerTintColor: AppStyles.color.DEFAULT_WHITE,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const bottomNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreenStack,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-home'} />
          </View>
        ),
      },
    },
    Discover: {
      screen: DiscoverScreen,
      navigationOptions: {
        tabBarLabel: 'Discover',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-compass'} />
          </View>
        ),
      },
    },
    Schedule: {
      screen: ScheduleScreen,
      navigationOptions: {
        tabBarLabel: 'Schedule',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-clock'} />
          </View>
        ),
      },
    },
    Favourite: {
      screen: FavouriteScreen,
      navigationOptions: {
        tabBarLabel: 'Favourite',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-star'} />
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: AppStyles.color.ACTIVE_TAB_COLOR,
    inactiveColor: AppStyles.color.INACTIVE_TAB_COLOR,
    barStyle: {backgroundColor: AppStyles.color.DEFAULT_WHITE},
  },
);

const App = createAppContainer(bottomNavigator);

export default App;
