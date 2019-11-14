import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

import styles, { ButtonContainer, Button, Text } from './style';

class CircleButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ButtonContainer>
        <Button
          style={{
            ...styles.button,
            ...this.props.style,
            backgroundColor: this.props.backgroundColor,
          }}>
          <Icon
            name={this.props.name || 'person'}
            style={{ ...styles.icon, color: this.props.color }}></Icon>
        </Button>
        {this.props.title ? <Text>{this.props.title}</Text> : null}
      </ButtonContainer>
    );
  }
}

CircleButton.propTypes = {
  style: PropTypes.object,
  backgroundColor: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string,
};

export default CircleButton;
