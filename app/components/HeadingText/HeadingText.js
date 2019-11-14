import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';

const HeadingText = props => {
  return (
    <Text style={{ ...styles.headingText, ...props.style }}>{props.title}</Text>
  );
};

HeadingText.propTypes = {
  title: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default HeadingText;
