import styled from 'styled-components';
import AppStyles from '../../config/styles';

export const Button = styled.TouchableOpacity`
  height: 50;
  width: 100%;
  background-color: ${AppStyles.color.DEFAULT_BLUE};
  align-items: center;
  justify-content: center;
  border-radius: 6;
  margin-vertical: 16px;
`;

export const Text = styled.Text`
  color: ${AppStyles.color.DEFAULT_WHITE};
  font-size: 16;
  font-weight: 500;
`;
