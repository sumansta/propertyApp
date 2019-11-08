import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {Avatar, Icon, SocialIcon} from 'react-native-elements';
import DialogInput from 'react-native-dialog-input';

import firebase from 'react-native-firebase';

import SimpleButton from '../../components/SimpleButton';

import {Container} from './style';

import {saveLogin} from '../../store/actions';
import AppStyles from '../../config/styles';
import images from '../../config/images';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      displayName: '',
      isDialogVisible: false,
    };
  }
  componentDidMount() {
    this.fetchUser();
  }

  async fetchUser() {
    const user = await firebase.auth().currentUser;
    console.log(user.displayName);
    this.setState({email: user.email, displayName: user.displayName});
  }

  async updateUser(inputText) {
    try {
      this.setState({isDialogVisible: false});
      await firebase.auth().currentUser.updateProfile({displayName: inputText});
      this.fetchUser();
    } catch (e) {
      console.log(e);
    }
  }

  showInputDialog = () => {
    this.setState({isDialogVisible: true});
  };

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
    const user = this.state;
    return (
      <Container>
        <DialogInput
          isDialogVisible={this.state.isDialogVisible}
          title={'Display Name'}
          hintInput={this.state.displayName || 'John Doe'}
          submitInput={inputText => {
            this.updateUser(inputText);
          }}
          closeDialog={() => {
            this.setState({isDialogVisible: false});
          }}></DialogInput>
        <Avatar
          rounded
          size={'large'}
          source={images.profile}
          showEditButton
          onEditPress={this.showInputDialog}
        />
        <Text
          style={{
            color: AppStyles.color.DEFAULT_BLUE,
            fontSize: 24,
          }}>
          {user.displayName}
        </Text>
        <Text style={{color: AppStyles.color.NORMAL_TEXT_COLOR}}>
          {user.email}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <SocialIcon type="twitter" />
          <SocialIcon type="instagram" />
          <SocialIcon type="facebook" />
        </View>
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
