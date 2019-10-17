import styled from 'styled-components';
import {StyleSheet} from 'react-native';

import AppStyles from '../../config/styles';

export const View = styled.View``;

const styles = StyleSheet.create({
  marker: {
    height: 28,
    width: 28,
    borderRadius: 50,
    backgroundColor: AppStyles.color.DEFAULT_WHITE,
    borderWidth: 6,
    borderColor: AppStyles.color.DEFAULT_ORANGE,
  },
  container: {
    height: 64,
    paddingVertical: 12,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
});

export default styles;
