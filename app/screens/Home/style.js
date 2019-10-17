import styled from 'styled-components';
import {StyleSheet, Dimensions} from 'react-native';

import AppStyles from '../../config/styles';

const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  mainView: {
    margin: 12,
  },
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: AppStyles.color.HEADING_TEXT_COLOR,
    margin: 4,
  },
  subHeadingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: AppStyles.color.HEADING_TEXT_COLOR,
    margin: 2,
  },
  normalText: {
    fontSize: 12,
    color: AppStyles.color.HEADING_TEXT_COLOR,
    margin: 4,
  },
  cardView: {
    margin: 10,
    width: 0.8 * screenWidth,
    height: 230,
  },
  imageContainer: {
    borderRadius: 6,
    elevation: 8,
  },
  backgroundImage: {
    borderRadius: 6,
    width: '100%',
    height: 190,
    backgroundColor: '#000',
  },
  titleText: {
    flex: 1,
    flexDirection: 'row',
    height: 80,
    backgroundColor: AppStyles.color.DEFAULT_WHITE,
    borderRadius: 6,
    width: '85%',
    alignSelf: 'center',
    padding: 16,
    position: 'absolute',
    marginTop: 140,
    elevation: 12,
  },
  buttonContainer: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    padding: 4,
    flexDirection: 'row',
    marginBottom: 8,
  },
});

export const Container = styled.View``;

export const TouchableOpacity = styled.TouchableOpacity``;

export default styles;
