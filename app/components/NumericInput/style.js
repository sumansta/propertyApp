import styled from 'styled-components';

import AppStyles from '../../config/styles';

export const Button = styled.TouchableOpacity`
  height: 20px;
  width: 20px;
  margin-horizontal: 16px;
  background-color: ${AppStyles.color.DEFAULT_ORANGE};
  border-radius: 50;
  justify-content: center;
`;

export const BText = styled.Text`
  color: ${AppStyles.color.DEFAULT_WHITE};
  font-size: 20px;
  font-weight: bold;
  align-self: center;
`;
