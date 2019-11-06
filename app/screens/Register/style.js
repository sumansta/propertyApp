import styled from 'styled-components';

import AppStyles from '../../config/styles';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  padding-vertical: 64px;
`;

export const HeadingText = styled.Text`
  text-align: center;
  font-size: 24;
  font-weight: 900;
  color: ${AppStyles.color.DEFAULT_BLUE};
`;

export const FormContainer = styled.View`
  width: 100%;
  align-items: center;
  padding: 32px;
  justify-content: flex-end;
`;

export const ErrorMessage = styled.Text`
  color: red;
`;

export const LoginContainer = styled.TouchableOpacity``;
