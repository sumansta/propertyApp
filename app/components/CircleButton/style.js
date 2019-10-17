import {StyleSheet} from 'react-native';
import styled from 'styled-components';

import AppStyles from '../../config/styles';

const styles = StyleSheet.create({
  button: {
    backgroundColor: AppStyles.color.DEFAULT_ORANGE,
    height: 36,
    width: 36,
    elevation: 8,
  },
  icon: {
    color: AppStyles.color.DEFAULT_WHITE,
    fontSize: 24,
  },
});

export const ButtonContainer = styled.View``;

export const Text = styled.Text`
  align-self: center;
  color: ${AppStyles.color.NORMAL_TEXT_COLOR};
  font-weight: bold;
  margin-top: 16px;
`;

export const Button = styled.TouchableOpacity`
  border-radius:50
  align-items:center
  justify-content:center
`;

export default styles;
