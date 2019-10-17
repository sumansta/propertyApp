import React, {Component} from 'react';

import {View} from './style';

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: 'Schedule',
    headerTitle: 'Schedule',
  };
  render() {
    return <View></View>;
  }
}

export default Schedule;
