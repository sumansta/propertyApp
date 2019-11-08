import styled from 'styled-components';

import {StyleSheet, Dimensions} from 'react-native';
import AppStyles from '../../config/styles';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({});

export const Container = styled.View`
  margin-horizontal: 16px;
  height: ${SCREEN_HEIGHT};
  flex: 1;
`;
export const View = styled.View``;
export const RangeSlider = styled.TouchableOpacity``;

export const ComponentContainer = styled.View`
  margin-vertical: 8px;
  flex: 1;
`;
export const ButtonsContainer = styled.View`
    justify-content:space-around  
    width: 100%
    flex-direction:row
`;

export const RentDurationRange = styled.TouchableOpacity`
  margin-horizontal: 4px;
  height: 16px;
  background-color: ${AppStyles.color.DEFAULT_WHITE};
  width: ${0.16 * SCREEN_WIDTH}px;
`;

export const LSView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const LSText = styled.Text`
  font-size: 20px;
  color: ${AppStyles.color.NORMAL_TEXT_COLOR};
  font-weight: bold;
  margin-horizontal: 6px;
`;

export default styles;
