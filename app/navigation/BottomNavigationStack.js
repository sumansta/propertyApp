import React from 'react';
import {View} from 'react-native';

import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import AppStyles from '../config/styles';

import DiscoverScreen from '../screens/Discover';
import FavouriteScreen from '../screens/Favourite';
import ScheduleScreen from '../screens/Schedule';

import ProfileScreen from '../screens/Profile';

import HomeScreenStack from './HomeScreenStack';

const BottomNavigatorStack = createMaterialBottomTabNavigator(
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
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-person'} />
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

export default BottomNavigatorStack;
