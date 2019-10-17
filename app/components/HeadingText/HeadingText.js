import React, {Component} from 'react';
import {Text} from 'react-native';

import styles from './style';

class HeadingText extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Text style={{...styles.headingText, ...this.props.style}}>
        {this.props.title}
      </Text>
    );
  }
}

export default HeadingText;
