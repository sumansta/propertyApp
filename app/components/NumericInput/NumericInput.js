import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {Button, BText} from './style';

const NumericInput = props => {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
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
export default NumericInput;
