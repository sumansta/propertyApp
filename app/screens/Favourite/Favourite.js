import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {favourites: state.favourites};
};

class Favourite extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return <Text>{JSON.stringify(this.props.favourites)}</Text>;
  };
}

export default connect(mapStateToProps)(Favourite);
