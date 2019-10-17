import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';

import styles, {View} from './style';

import MultiSlider from '@ptomasroos/react-native-multi-slider';
import AppStyles from '../../config/styles';

class RangeSlider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView scrollEnabled={true} contentContainerStyle={styles.container}>
        <MultiSlider
          sliderLength={320}
          values={this.props.data.values || [1000, 10000]}
          step={this.props.data.step || 1000}
          min={this.props.data.min || 1000}
          max={this.props.data.max || 10000}
          selectedStyle={{
            backgroundColor:
              this.props.data.color || AppStyles.color.DEFAULT_ORANGE,
          }}
          isMarkersSeparated={true}
          customMarkerLeft={e => {
            return (
              <Marker
                currentValue={e.currentValue}
                color={this.props.data.color || AppStyles.color.DEFAULT_ORANGE}
              />
            );
          }}
          customMarkerRight={e => {
            return (
              <Marker
                currentValue={e.currentValue}
                color={this.props.data.color || AppStyles.color.DEFAULT_ORANGE}
              />
            );
          }}
          onValuesChangeStart={() => {}}
          onValuesChangeFinish={() => {}}
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
        ${props.currentValue}
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

export default RangeSlider;
