import React, {Component} from 'react';
import {ScrollView, Text, Dimensions} from 'react-native';

import styles, {View} from './style';

import MultiSlider from '@ptomasroos/react-native-multi-slider';
import AppStyles from '../../config/styles';

class SingleSlider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView scrollEnabled={true} contentContainerStyle={styles.container}>
        <MultiSlider
          sliderLength={0.8 * Dimensions.get('window').width}
          values={this.props.data.values || [1000]}
          min={this.props.data.min || 1000}
          max={this.props.data.max || 10000}
          selectedStyle={{
            backgroundColor:
              this.props.data.color || AppStyles.color.DEFAULT_ORANGE,
          }}
          customMarker={e => {
            return (
              <Marker
                currentValue={e.currentValue}
                color={this.props.data.color || AppStyles.color.DEFAULT_ORANGE}
              />
            );
          }}
          onValuesChangeFinish={finish => {
            this.props.setValue(finish);
          }}
        />
      </ScrollView>
    );
  }
}

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
      <View style={{...styles.marker, borderColor: props.color}}></View>
    </View>
  );
};

export default SingleSlider;
