import styled from 'styled-components';

import AppStyles from '../../config/styles';

export const Cell = styled.View`
  height: 48px;
  padding: 8px;
  background-color: ${AppStyles.color.DEFAULT_BLUE};
  border-bottom-width: 2;
  border-bottom-color: ${AppStyles.color.DEFAULT_ORANGE};
`;
