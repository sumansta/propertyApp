import styled from 'styled-components';
import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({});

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
  width: ${Dimensions.get('window').width};
  height: ${Dimensions.get('window').height};
`;

export const ImageBackgroundView = styled.View`
  width: ${Dimensions.get('window').width};
`;

export const CurrentVideoTO = styled.TouchableOpacity``;

export const CarouselBackgroundView = styled.View`
  width: 100%;
  height: 100%;
`;

export default styles;
