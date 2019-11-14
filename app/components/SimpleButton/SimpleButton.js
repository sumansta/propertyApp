import React from 'react';
import PropTypes from 'prop-types';

import { Button, Text } from './style';

const SimpleButton = props => {
  return (
    <Button onPress={props.onPress}>
      <Text>{props.title}</Text>
    </Button>
  );
};

SimpleButton.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
};

export default SimpleButton;
