import React from 'react';
import { View } from 'react-native';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
        tabBarIcon: ({ tintColor }) => <TabIcon color={tintColor} name="home" />,
      },
    },
    Discover: {
      screen: DiscoverScreen,
      navigationOptions: {
        tabBarLabel: 'Discover',
        tabBarIcon: ({ tintColor }) => (
          <TabIcon color={tintColor} name="search" />
        ),
      },
    },
    Schedule: {
      screen: ScheduleScreen,
      navigationOptions: {
        tabBarLabel: 'Schedule',
        tabBarIcon: ({ tintColor }) => (
          <TabIcon color={tintColor} name="schedule" />
        ),
      },
    },
    Favourite: {
      screen: FavouriteScreen,
      navigationOptions: {
        tabBarLabel: 'Favourite',
        tabBarIcon: ({ tintColor }) => <TabIcon color={tintColor} name="star" />,
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => (
          <TabIcon color={tintColor} name="person" />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: AppStyles.color.ACTIVE_TAB_COLOR,
    inactiveColor: AppStyles.color.INACTIVE_TAB_COLOR,
    barStyle: { backgroundColor: AppStyles.color.DEFAULT_WHITE },
  },
);

const TabIcon = props => {
  return (
    <View>
      <Icon style={{ color: props.color }} size={25} name={props.name} />
    </View>
  );
};

export default BottomNavigatorStack;
