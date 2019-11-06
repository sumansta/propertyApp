import styled from 'styled-components';
import {StyleSheet, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({});

export const Container = styled.View`
  margin-horizontal: 16px;
  flex: 1;
`;

export const View = styled.View``;

export const InfoContainer = styled.View`
  background-color: white;
  height: 100px;
  width: 90%;
  position: absolute;
  bottom: 100;
  align-self: center;
  border-radius: 6;
  elevation: 10;
`;
export const CurrentImage = styled.Image`
  width: ${SCREEN_WIDTH};
  height: ${SCREEN_HEIGHT};
`;

export const ImageBackgroundView = styled.View`
  width: ${SCREEN_WIDTH};
`;

export const CurrentVideoTO = styled.TouchableOpacity``;

export const CarouselBackgroundView = styled.View`
  width: 100%;
  height: 100%;
`;

export const EmptyContainer = styled.View`
  flex: 1;
  justify-content: space-around;
  align-content: center;
`;

export default styles;
