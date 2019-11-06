import React, {Component} from 'react';
import {Text, Dimensions, ActivityIndicator} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import {
  View,
  InfoContainer,
  CurrentImage,
  ImageBackgroundView,
  CurrentVideoTO,
  CarouselBackgroundView,
} from './style';
import AppStyles from '../../config/styles';

class CarouselSc extends Component {
  constructor(props) {
    super();
    this.state = {
      loading: true,
      images: [],
    };
    this.props = props;
    this._carousel = {};
  }

  componentDidMount() {
    const images = this.props.navigation.getParam('images');
    this.setState({images: images});
    this.fetch();
  }

  async fetch() {
    setTimeout(() => {
      this.setState({loading: false});
    }, 2000);
  }

  handleSnapToItem(index) {}

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
          <Text>{item.title}</Text>
        </InfoContainer>
      </ImageBackgroundView>
    );
  };

  render = () => {
    return this.state.loading && this.state.images.length > 0 ? (
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 10,
          marginTop: '50%',
        }}>
        <ActivityIndicator
          size="large"
          color={AppStyles.color.DEFAULT_ORANGE}
        />
      </View>
    ) : (
      <View>
        <CarouselBackgroundView>
          <Carousel
            ref={c => {
              this._carousel = c;
            }}
            data={this.state.images}
            renderItem={this._renderItem.bind(this)}
            onSnapToItem={this.handleSnapToItem.bind(this)}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={Dimensions.get('window').width}
            layout={'default'}
            firstItem={0}
          />
        </CarouselBackgroundView>
      </View>
    );
  };
}

export default CarouselSc;
