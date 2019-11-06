import styled from 'styled-components';

import AppStyles from '../../config/styles';

export const Container = styled.View`
  background-color:${AppStyles.color.DEFAULT_WHITE}
  flex: 1;
  padding-vertical:64px;
`;

export const FormContainer = styled.View`
  padding: 32px;
  justify-content: center;
`;

export const HeadingText = styled.Text`
  text-align: center;
  font-size: 24;
  font-weight: 900;
  color: ${AppStyles.color.DEFAULT_BLUE};
`;

export const RegisterContainer = styled.TouchableOpacity`
  padding: 16px;
  align-items: center;
`;
