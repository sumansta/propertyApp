import React, { Component } from 'react';
import { AsyncStorage, Platform } from 'react-native';
import { Provider } from 'react-redux';

import { persistor, store } from './store/index';
import { PersistGate } from 'redux-persist/integration/react';

import Navigator from './navigation';

import firebase from 'react-native-firebase';

import AppStyles from './config/styles';

class EntryPoint extends Component {
  componentDidMount() {
    firebase
      .messaging()
      .hasPermission()
      .then(hasPermission => {
        if (hasPermission) {
          this.getToken();
          this.subscribeToNotificationListeners();
        } else {
          firebase
            .messaging()
            .requestPermission()
            .then(() => {
              this.subscribeToNotificationListeners();
            })
            .catch(error => {
              console.error(error);
            });
        }
      });
  }

  async getToken() {
    let fcmToken = await AsyncStorage.getItem('fcmToken');

    if (!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
      if (fcmToken) {
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    }
  }

  subscribeToNotificationListeners() {
    const channel = new firebase.notifications.Android.Channel(
      'property_app_channel',
      'Notifications',
      firebase.notifications.Android.Importance.Max,
    ).setDescription(
      'A Channel To manage the notifications related to Application',
    );

    firebase.notifications().android.createChannel(channel);

    this.notificationListener = firebase
      .notifications()
      .onNotification(notification => {
        this.displayNotification(notification);
      });
  }

  displayNotification = notification => {
    if (Platform.OS === 'android') {
      const localNotification = new firebase.notifications.Notification({
        sound: 'default',
        show_in_foreground: true,
      })
        .setNotificationId(notification.notificationId)
        .setTitle(notification.title)
        .setSubtitle(notification.subtitle)
        .setBody(notification.body)
        .setData(notification.data)
        .android.setChannelId('property_app_channel')
        .android.setSmallIcon('ic_notification_icon')
        .android.setColor(AppStyles.color.DEFAULT_BLUE)
        .android.setPriority(firebase.notifications.Android.Priority.High);

      firebase
        .notifications()
        .displayNotification(localNotification)
        .catch(err => console.error(err));
    }
  };

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navigator />
        </PersistGate>
      </Provider>
    );
  }
}

export default EntryPoint;
