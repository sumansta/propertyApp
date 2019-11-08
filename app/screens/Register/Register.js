import React, {Component} from 'react';
import {Text} from 'react-native';
import {ProgressDialog} from 'react-native-simple-dialogs';

import SimpleButton from '../../components/SimpleButton';
import LogoContainer from '../../components/LogoContainer';
import SimpleTextInput from '../../components/SimpleTextInput';
import CustomToast from '../../utils/NativeModules';

import firebase from 'react-native-firebase';

import {inputTypes, validate} from '../../utils/validator';

import {Container, HeadingText, FormContainer, LoginContainer} from './style';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      fullName: '',
      error: false,
      errorMessage: '',
      progressVisible: false,
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
      header: null,
    };
  };

  handleRegister = () => {
    this.setState({progressVisible: true});
    const {email, password} = this.state;
    console.log(this.state);
    const isValid = validate(email, inputTypes.email) && password.length > 4;
    if (isValid) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          this.setState({progressVisible: false});
          this.props.navigation.navigate('Auth');
          alert('user created');
        })
        .catch(er => {
          this.setState({
            progressVisible: false,
            error: true,
            errorMessage: 'Invalid Password',
          });
        });
    } else {
      this.setState({progressVisible: false});
      CustomToast.show('Invalid Fields', CustomToast.LONG);
    }
  };
  render() {
    return (
      <Container>
        <LogoContainer />
        <FormContainer>
          <HeadingText>Property App</HeadingText>
          <SimpleTextInput placeholder="First Name" />
          <SimpleTextInput placeholder="Last Name" />
          <SimpleTextInput
            placeholder="Email Address"
            onChangeText={email => {
              this.setState({email});
            }}
          />
          <SimpleTextInput
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={password => {
              this.setState({password});
            }}
          />
          <SimpleButton title="Register" onPress={this.handleRegister} />
          <LoginContainer
            onPress={() => {
              this.props.navigation.navigate('Auth');
            }}>
            <Text>Already a member? Log In</Text>
          </LoginContainer>
        </FormContainer>
        <ProgressDialog
          visible={this.state.progressVisible}
          title="Registering"
          message="Please, wait..."
        />
      </Container>
    );
  }
}
