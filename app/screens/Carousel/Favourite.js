import React, {Component} from 'react';
import {Text, Dimensions, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import Carousel from 'react-native-snap-carousel';

import {fetchFavourites} from '../../api/property';
import {saveFavourites} from '../../store/actions';

const mapStateToProps = state => {
  return {favourites: state.favourites};
};

const mapDispatchToProps = dispatch => {
  return {
    saveFavourites: data => dispatch(saveFavourites(data)),
  };
};

import {
  View,
  InfoContainer,
  CurrentImage,
  ImageBackgroundView,
  CurrentVideoTO,
  CarouselBackgroundView,
} from './style';

class Favourite extends Component {
  constructor(props) {
    super();
    this.state = {
      loading: true,
    };
    this.props = props;
    this._carousel = {};
  }

  componentDidMount() {
    this.fetch();
  }

  async fetch() {
    // try {
    //   const response = await fetchFavourites();
    //   if (response) {
    //     this.props.saveFavourites(response.data);
    //     this.setState({loading: false});
    //   }
    // } catch (e) {
    this.setState({loading: false});
    // }
  }

  handleSnapToItem(index) {
    console.log('snapped to ', index);
  }

  _renderItem = ({item, index}) => {
    return (
      <ImageBackgroundView>
        <CurrentVideoTO
          onPress={() => {
            this._carousel.snapToItem(index);
          }}>
          <CurrentImage source={{uri: item.imageURL}} />
        </CurrentVideoTO>
        <InfoContainer>
          <Text>SSSSSSSSS</Text>
        </InfoContainer>
      </ImageBackgroundView>
    );
  };

  render = () => {
    console.log(this.props);
    return this.state.loading ? (
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 10,
          marginTop: '50%',
        }}>
        <ActivityIndicator />
      </View>
    ) : (
      <View></View>
      // <CarouselBackgroundView>
      //   <Carousel
      //     ref={c => {
      //       this._carousel = c;
      //     }}
      //     data={this.props.favourites}
      //     renderItem={this._renderItem.bind(this)}
      //     onSnapToItem={this.handleSnapToItem.bind(this)}
      //     sliderWidth={Dimensions.get('window').width}
      //     itemWidth={Dimensions.get('window').width}
      //     layout={'default'}
      //     firstItem={0}
      //   />
      // </CarouselBackgroundView>
    );
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Favourite);
