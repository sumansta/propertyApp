import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { Button, BText } from './style';

const NumericInput = props => {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Button
        onPress={() => {
          if (props.value > props.minValue) {
            props.setValue(-1);
          }
        }}>
        <BText>-</BText>
      </Button>
      <Text>{props.value}</Text>
      <Button
        onPress={() => {
          if (props.value < props.maxValue) {
            props.setValue(1);
          }
        }}>
        <BText>+</BText>
      </Button>
    </View>
  );
};

NumericInput.propTypes = {
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  value: PropTypes.number,
  setValue: PropTypes.func,
};

export default NumericInput;
