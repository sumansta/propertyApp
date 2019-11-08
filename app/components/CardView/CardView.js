import React from 'react';
import {TouchableOpacity, View, Text, ActivityIndicator} from 'react-native';
import Image from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialIcons';

import CircleButton from '../CircleButton';
import styles, {FavouriteButton} from './style';

import LottieView from 'lottie-react-native';

import AppStyles from '../../config/styles';
import images from '../../config/images';

const FavButton = props => {
  return props.favourite ? (
    <View
      style={{
        height: 36,
        width: 36,
      }}>
      <LottieView source={images.favourite} autoPlay loop={false} />
    </View>
  ) : (
    <Icon
      name={'star-border'}
      style={{
        fontSize: 32,
        color: AppStyles.color.DEFAULT_ORANGE,
      }}
    />
  );
};

class CardView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favouriteIcon: 'star-border',
    };
  }
  render() {
    return (
      <View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => this.props.handleNavigation()}>
          <View style={{...styles.cardView, ...this.props.style}}>
            <FavouriteButton
              onPress={() => {
                this.props.showToast();
              }}>
              <FavButton favourite={this.props.favourite} />
            </FavouriteButton>
            <View style={styles.imageContainer}>
              <Image
                style={styles.backgroundImage}
                source={this.props.image || images.image1}
                resizeMode="cover"
                PlaceholderContent={<ActivityIndicator />}
              />
            </View>
            <View style={styles.titleText}>
              <View style={{flex: 5}}>
                <Text style={styles.subHeadingText}>{this.props.title}</Text>
                <Text style={styles.normalText}>{this.props.description}</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <CircleButton
                  name={this.props.iconName}
                  backgroundColor={AppStyles.color.DEFAULT_ORANGE}
                  color={AppStyles.color.DEFAULT_WHITE}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default CardView;
