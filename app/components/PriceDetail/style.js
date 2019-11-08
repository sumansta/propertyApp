import styled from 'styled-components';
import AppStyles from '../../config/styles';

const styles = {
  singleIcon: {
    fontSize: 24,
  },
  busColor: '#D0A8EE',
  securityColor: '#F28187',
  parkColor: '#88D6FC',
};

export const View = styled.View``;
export const Text = styled.Text``;
export const Container = styled.View`
  height: 80%;
  flex: 1;
  flex-direction: row;
`;

export const PriceInfo = styled.View`
  width: 50%;
  height: 100%;
  padding: 12px;
`;

export const PriceHeading = styled.Text`
  font-size: 20;
  font-weight: bold;
  color: ${AppStyles.color.HEADING_TEXT_COLOR};
  padding-vertical: 2px;
`;
export const AddressHeading = styled.Text`
  font-size: 16;
  color: ${AppStyles.color.HEADING_TEXT_COLOR};
  padding-vertical: 2px;
`;

export const PriceIcons = styled.View`
  flex: 1;
  flex-direction: row;
  width: 50%;
`;
export const SingleIcon = styled.View`
  flex: 1;
  padding-vertical: 16px;
  padding-horizontal: 8px;
  height: 100%;
  width: 48px;
  align-items: center;
`;

export const IconText = styled.Text`
  margin-vertical: 8px;
  color: ${AppStyles.color.NORMAL_TEXT_COLOR};
`;

export default styles;
