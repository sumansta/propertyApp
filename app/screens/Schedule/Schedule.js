import React, {Component} from 'react';
import {CameraRoll, View} from 'react-native';

export default class Schedule extends Component {
  componentDidMount() {
    CameraRoll.getPhotos({first: 1}, data => {
      console.log(data);
    });
  }
  render() {
    return <View></View>;
  }
}
