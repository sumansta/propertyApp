import React, {Component} from 'react';

import {TextInput} from './style';

export default class SimpleTextInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <TextInput {...this.props} />;
  }
}
