import styled from 'styled-components';
import {StyleSheet, Dimensions} from 'react-native';
import AppStyles from '../../config/styles';

const styles = StyleSheet.create({
  currentImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const View = styled.View``;

export const InfoContainer = styled.View`
  background-color: ${AppStyles.color.DEFAULT_WHITE};
  height: 80px;
  width: 90%;
  position: absolute;
  bottom: 100;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: 8;
  elevation: 10;
`;

export const CurrentImage = styled.Image`
  width: ${Dimensions.get('window').width};
  height: ${Dimensions.get('window').height};
`;

export const ImageBackgroundView = styled.View`
  width: ${Dimensions.get('window').width};
`;

export const CarouselBackgroundView = styled.View`
  width: 100%;
  height: 100%;
`;

export default styles;
