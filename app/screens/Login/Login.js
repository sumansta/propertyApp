import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';

export class Login extends Component {
  render() {
    return (
      <View>
        <Text>Login</Text>
        <TextInput placeholder="Email" />
        <TextInput placeholder="Password" />
      </View>
    );
  }
}

export default Login;
