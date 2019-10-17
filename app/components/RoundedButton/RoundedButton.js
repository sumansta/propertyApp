import React, {Component} from 'react';

import styles, {Button, Text} from './style';
import AppStyles from '../../config/styles';

class RoundedButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Button
        style={{
          ...styles.button,
          backgroundColor:
            this.props.status == 'active'
              ? AppStyles.color.DEFAULT_ORANGE
              : this.props.status == 'inactive'
              ? AppStyles.color.INACTIVE_BUTTON_COLOR
              : AppStyles.color.DEFAULT_WHITE,
        }}
        onPress={() => {}}>
        <Text
          style={{
            ...styles.text,
            color:
              this.props.status == 'active'
                ? AppStyles.color.DEFAULT_WHITE
                : AppStyles.color.NORMAL_TEXT_COLOR,
          }}>
          {this.props.title || ' Button'}
        </Text>
      </Button>
    );
  }
}

export default RoundedButton;
