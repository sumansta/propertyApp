import React, {Component} from 'react';
import {Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Image from 'react-native-fast-image';
import LottieView from 'lottie-react-native';

import styles, {
  Container,
  View,
  InfoContainer,
  ImageBackgroundView,
  CarouselBackgroundView,
} from './style';

import images from '../../config/images';

import PriceDetail from '../../components/PriceDetail';

class CarouselSc extends Component {
  staticNavigationOptions = ({navigation}) => {
    return {
      header: null,
    };
  };
  constructor(props) {
    super();
    this.state = {
      loading: true,
      images: [],
      details: [],
    };
    this.props = props;
    this._carousel = {};
  }

  componentDidMount() {
    const images = this.props.navigation.getParam('images');
    const details = this.props.navigation.getParam('details');
    this.setState({images: images, details: details});
    this.showLoader();
  }

  async showLoader() {
    setTimeout(() => {
      this.setState({loading: false});
    }, 500);
  }

  handleSnapToItem(index) {}

  _renderItem = ({item, index}) => {
    return (
      <ImageBackgroundView>
        <Image
          onProgress={e => {
            <LottieView source={images.loading} autoPlay loop />;
          }}
          style={styles.currentImage}
          source={{uri: item.imageURL}}
        />
        <InfoContainer>
          <PriceDetail detail={this.state.details} />
        </InfoContainer>
      </ImageBackgroundView>
    );
  };

  render = () => {
    return (
      <Container>
        {this.state.loading && this.state.images.length > 0 ? (
          <View
            style={{
              height: 150,
              width: 150,
            }}>
            <LottieView source={images.loading} autoPlay loop />
          </View>
        ) : (
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
        )}
      </Container>
    );
  };
}

export default CarouselSc;
