import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

import CardView from '../../components/CardView';

const mapStateToProps = state => {
  return {favourites: state.favourites};
};

class Favourite extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.favourites);
  }

  render = () => {
    let item = this.props.favourites;
    return (
      <View>
        {
          <CardView
            style={{width: '95%'}}
            key={item.id}
            handleNavigation={() => {
              this.props.navigation.navigate('DetailsScreen', {
                id: item.id,
                title: item.heading,
              });
            }}
            showToast={() => {
              this.handleFavourite(item);
            }}
            image={{uri: item.imageURL}}
            iconName={item.icon}
            title={item.heading}
            description={item.description}
          />
        }
      </View>
    );
  };
}

export default connect(mapStateToProps)(Favourite);
