import {StyleSheet, Dimensions} from 'react-native';
import styled from 'styled-components';
import AppStyles from '../../config/styles';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  button: {
    backgroundColor: AppStyles.color.DEFAULT_ORANGE,
    color: AppStyles.color.DEFAULT_WHITE,
    margin: 8,
    padding: 8,
    height: 48,
    width: screenWidth / 2.4,
    borderRadius: 25,
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export const Button = styled.TouchableOpacity``;

export default styles;
