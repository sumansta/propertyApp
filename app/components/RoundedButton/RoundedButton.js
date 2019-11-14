import React from 'react';
import PropTypes from 'prop-types';

import styles, { Button, Text } from './style';
import AppStyles from '../../config/styles';

const RoundedButton = props => {
  return (
    <Button
      style={{
        ...styles.button,
        backgroundColor: props.color || AppStyles.color.DEFAULT_WHITE,
      }}
      onPressIn={props.handleClick}>
      <Text
        style={{
          ...styles.text,
          color:
            props.status === 'active'
              ? AppStyles.color.DEFAULT_WHITE
              : AppStyles.color.NORMAL_TEXT_COLOR,
        }}>
        {props.title || ' Button'}
      </Text>
    </Button>
  );
};

RoundedButton.propTypes = {
  status: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
  handleClick: PropTypes.func,
};

export default RoundedButton;
