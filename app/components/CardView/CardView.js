import React from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import CircleButton from '../CircleButton';
import styles, {FavouriteButton} from './style';

import AppStyles from '../../config/styles';

/**
const CardView = props => (
  <View>
    <TouchableOpacity onPress={() => props.handleNavigation()}>
      <View style={{...styles.cardView, ...props.style}}>
        <FavouriteButton
          onPress={() => {
            props.showToast();
          }}>
          <Icon
            name="star-border"
            style={{
              fontSize: 32,
              color: AppStyles.color.DEFAULT_ORANGE,
            }}></Icon>
        </FavouriteButton>
        <View style={styles.imageContainer}>
          <Image
            style={styles.backgroundImage}
            source={props.image || images.image1}
            resizeMode="cover"></Image>
        </View>
        <View style={styles.titleText}>
          <View style={{flex: 5}}>
            <Text style={styles.subHeadingText}>{props.title}</Text>
            <Text style={styles.normalText}>{props.description}</Text>
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <CircleButton
              name={props.iconName}
              backgroundColor={AppStyles.color.DEFAULT_ORANGE}
              color={AppStyles.color.DEFAULT_WHITE}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  </View>
);
*/

class CardView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favouriteIcon: 'star-border',
    };

    handleFavourite = () => {
      this.setState({favouriteIcon: 'star'});
    };
  }
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.handleNavigation()}>
          <View style={{...styles.cardView, ...this.props.style}}>
            <FavouriteButton
              onPress={() => {
                // this.handleFavourite();
                this.props.showToast();
              }}>
              <Icon
                name={this.state.favouriteIcon}
                style={{
                  fontSize: 32,
                  color: AppStyles.color.DEFAULT_ORANGE,
                }}></Icon>
            </FavouriteButton>
            <View style={styles.imageContainer}>
              <Image
                style={styles.backgroundImage}
                source={this.props.image || images.image1}
                resizeMode="cover"></Image>
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
