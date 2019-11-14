import React from 'react';
import { ScrollView, Text, Dimensions } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import PropTypes from 'prop-types';

import styles, { View } from './style';

import AppStyles from '../../config/styles';

const SingleSlider = props => {
  return (
    <ScrollView scrollEnabled={true} contentContainerStyle={styles.container}>
      <MultiSlider
        sliderLength={0.8 * Dimensions.get('window').width}
        values={props.data.values || [1000]}
        min={props.data.min || 1000}
        max={props.data.max || 10000}
        selectedStyle={{
          backgroundColor: props.data.color || AppStyles.color.DEFAULT_ORANGE,
        }}
        customMarker={e => {
          return (
            <Marker
              currentValue={e.currentValue}
              color={props.data.color || AppStyles.color.DEFAULT_ORANGE}
            />
          );
        }}
        onValuesChangeFinish={finish => {
          props.setValue(finish);
        }}
      />
    </ScrollView>
  );
};

const Marker = props => {
  return (
    <View
      style={{
        alignItems: 'center',
        marginTop: -20,
      }}>
      <Text
        style={{
          color: AppStyles.color.NORMAL_TEXT_COLOR,
          fontSize: 12,
        }}>
        {props.currentValue} m
      </Text>
      <View
        style={{
          width: 2,
          backgroundColor: props.color,
          height: 6,
          marginVertical: 2,
        }}></View>
      <View style={{ ...styles.marker, borderColor: props.color }}></View>
    </View>
  );
};

Marker.propTypes = {
  currentValue: PropTypes.string,
  color: PropTypes.string,
};

SingleSlider.propTypes = {
  data: PropTypes.object,
  setValue: PropTypes.func,
};

export default SingleSlider;
