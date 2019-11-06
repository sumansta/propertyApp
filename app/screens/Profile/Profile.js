import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

import firebase from 'react-native-firebase';

import SimpleButton from '../../components/SimpleButton';

import {Container} from './style';

import {saveLogin} from '../../store/actions';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  componentDidMount() {
    this.fetchUser();
  }

  async fetchUser() {
    const user = await firebase.auth().currentUser;
    this.setState({user});
  }

  logOut = async () => {
    await firebase
      .auth()
      .signOut(() => {})
      .catch(er => {
        console.log(er);
      });
    this.props.navigation.navigate('Auth');
  };
  render() {
    const {user} = this.state;
    return (
      <Container>
        <Text>Profile Screen</Text>
        <SimpleButton title="Log Out" onPress={this.logOut} />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
