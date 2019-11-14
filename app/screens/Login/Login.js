import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { ProgressDialog } from 'react-native-simple-dialogs';
import firebase from 'react-native-firebase';
import PropTypes from 'prop-types';

import CustomToast from '../../utils/NativeModules';
import SimpleButton from '../../components/SimpleButton';
import LogoContainer from '../../components/LogoContainer';
import SimpleTextInput from '../../components/SimpleTextInput';

import { inputTypes, validate } from '../../utils/validator';

import {
  Container,
  FormContainer,
  RegisterContainer,
  HeadingText,
} from './style';
import { saveLogin } from '../../store/actions';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: false,
      progressVisible: false,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.navigation.navigate('Dashboard');
      }
    });
  }

  handleLogin = () => {
    this.setState({ progressVisible: true });
    const { email, password } = this.state;
    const isValid = validate(email, inputTypes.email);

    if (isValid) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          this.props.saveLogin(true);
          this.props.navigation.navigate('Dashboard');
        })
        .catch(err => {
          CustomToast.show('Invalid Login', CustomToast.LONG);
          this.setState({ progressVisible: false, error: true });
        });
    } else {
      this.setState({ progressVisible: false });
      CustomToast.show('Invalid Email', CustomToast.LONG);
    }
  };
  render() {
    return (
      <Container>
        <LogoContainer />
        <FormContainer>
          <HeadingText>Login</HeadingText>
          <SimpleTextInput
            placeholder="Email"
            textContentType={'emailAddress'}
            onChangeText={email => {
              this.setState({ email });
            }}
          />
          <SimpleTextInput
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={password => {
              this.setState({ password });
            }}
          />
          <SimpleButton title="Login" onPress={this.handleLogin} />
          <RegisterContainer
            onPress={() => {
              this.props.navigation.navigate('Register');
            }}>
            <Text>New User? Register</Text>
          </RegisterContainer>
        </FormContainer>
        <ProgressDialog
          visible={this.state.progressVisible}
          title="Logging in"
          message="Please, wait..."
        />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveLogin: data => dispatch(saveLogin(data)),
  };
};

Login.propTypes = {
  navigation: PropTypes.object,
  saveLogin: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
