import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';

import styles from './style';

class PropertyButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity style={this.getStyle()} onPress={() => {}}>
        <Text style={{...styles.text, color: this.props.style.color}}>
          {this.props.title
            ? String(this.props.title).toUpperCase()
            : 'P-BUTTON'}
        </Text>
      </TouchableOpacity>
    );
  }

  getStyle() {
    return {...styles.button, ...this.props.style};
  }
}

export default PropertyButton;
