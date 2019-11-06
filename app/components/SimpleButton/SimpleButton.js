import React, {Component} from 'react';

import {Button, Text} from './style';

export default class SimpleButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Button onPress={this.props.onPress}>
        <Text>{this.props.title}</Text>
      </Button>
    );
  }
}
