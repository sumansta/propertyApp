import React, {Component} from 'react';
import {Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';

import CustomVibrate from '../../utils/CustomVibrate';

import {
  Container,
  View,
  ButtonsContainer,
  ComponentContainer,
  RentDurationRange,
  LSView,
  LSText,
} from './style';
import AppStyles from '../../config/styles';

import HeadingText from '../../components/HeadingText';
import RangeSlider from '../../components/RangeSlider';
import SingleSlider from '../../components/SingleSlider';
import RoundedButton from '../../components/RoundedButton';
import PropertyButton from '../../components/PropertyButton';
import NumericInput from '../../components/NumericInput';

class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rentDuration: 0,
      price: {
        min: 1000,
        max: 10000,
      },
      livingSpace: {
        bedroom: false,
        bathroom: false,
        kitchen: 0,
        living: 0,
      },
      checked: false,
      distance: [400],
      showMore: true,
      showMoreTitle: 'More >>',
      buttonsToShow: 2,
      additionalPreferences: [
        {id: 1, title: 'Parks Nearby', status: 'inactive'},
        {id: 2, title: 'Sports Facilities', status: 'inactive'},
        {id: 3, title: 'Cultural Life', status: 'inactive'},
        {id: 4, title: 'Shopping Malls', status: 'inactive'},
      ],
    };
  }

  static navigationOptions = {
    title: 'Discover',
  };

  componentDidMount() {
    this.generateAdditionalPreference();
  }

  rentDurationSlider = (j = 0) => {
    let slides = [];
    for (let i = 0; i < 5; i++) {
      let slideColor =
        i <= j ? AppStyles.color.DEFAULT_ORANGE : AppStyles.color.DEFAULT_WHITE;
      let borderLeft = i == 0 ? 10 : 0;
      let borderRight = i == 4 ? 10 : 0;
      slides.push(
        <View>
          <RentDurationRange
            activeOpacity={1}
            style={{
              backgroundColor: slideColor,
              borderTopLeftRadius: borderLeft,
              borderBottomLeftRadius: borderLeft,
              borderTopRightRadius: borderRight,
              borderBottomRightRadius: borderRight,
            }}
            onPress={() => {
              CustomVibrate.vibrate();
              this.setState({rentDuration: i});
            }}
          />
          <Text
            style={{
              fontSize: 10,
              color: AppStyles.color.NORMAL_TEXT_COLOR,
              alignSelf: 'center',
              marginTop: 8,
              fontWeight: 'bold',
            }}>
            {i == 0 ? 1 : i * 3}
            {i == 0 ? ' month' : ' months'}
          </Text>
        </View>,
      );
    }
    return slides;
  };

  handleButtonClick = id => {};

  setPrice = ([min, max]) => {
    this.setState({price: {min: min, max: max}});
  };

  setDistance = distance => {
    this.setState({distance});
  };

  handleReset = () => {
    const additionalPreferences = this.state.additionalPreferences.map(el => ({
      ...el,
      status: 'inactive',
    }));
    this.setState({
      ...this.state,
      rentDuration: 0,
      price: {min: 1000, max: 10000},
      distance: [400],
      livingSpace: {
        bedroom: false,
        bathroom: false,
        kitchen: 0,
        living: 0,
      },
      additionalPreferences,
    });
  };
  handleApply = () => {
    let filter = {
      rentDuration: this.state.rentDuration,
      distance: this.state.distance,
      priceRange: this.state.price,
      additionalPreferences: this.state.additionalPreferences.filter(
        el => el.status == 'active',
      ),
      livingSpace: this.state.livingSpace,
    };
    console.log(filter);
  };

  generateAdditionalPreference(buttonsLength = 4) {
    let newAdditionalPreferences = this.state.additionalPreferences;
    let additionalButtons = [];
    for (let i = 0; i < buttonsLength; i++) {
      let data = newAdditionalPreferences[i];
      let objIndex = newAdditionalPreferences.findIndex(
        obj => obj.id == data.id,
      );
      additionalButtons.push(
        <RoundedButton
          activeOpacity={1}
          key={objIndex}
          active={data.active}
          title={data.title}
          color={
            data.status == 'active'
              ? AppStyles.color.DEFAULT_ORANGE
              : data.status == 'inactive'
              ? AppStyles.color.INACTIVE_BUTTON_COLOR
              : AppStyles.color.DEFAULT_WHITE
          }
          status={data.status}
          handleClick={() => {
            this.handleButtonClick(objIndex);
            if (newAdditionalPreferences[objIndex].status == 'active') {
              newAdditionalPreferences[objIndex].status = 'inactive';
            } else {
              newAdditionalPreferences[objIndex].status = 'active';
            }
            this.setState({
              additionalPreferences: newAdditionalPreferences,
            });
            this.generateAdditionalPreference();
          }}
        />,
      );
    }

    // if (this.state.showMore) {
    //   this.setState({
    //     showMoreTitle: '<< Less',
    //     buttonsToShow: this.state.additionalPreferences.length,
    //   });
    // } else {
    //   this.setState({
    //     showMoreTitle: 'More >>',
    //     buttonsToShow: 2,
    //   });
    // }

    // additionalButtons.push(
    //   <RoundedButton
    //     title={this.state.showMoreTitle}
    //     handleClick={() => {
    //       this.setState({
    //         showMore: !this.state.showMore,
    //       });
    //       this.generateAdditionalPreference(this.state.buttonsToShow);
    //     }}
    //   />,
    // );

    // this.setState({additionalButtons: additionalButtons});
    return additionalButtons;
  }

  render() {
    const slides = this.rentDurationSlider(this.state.rentDuration);
    const additionalButtons = this.generateAdditionalPreference();
    const {min, max} = this.state.price;
    const distance = this.state.distance;
    return (
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ComponentContainer>
            <HeadingText title="Living Space" />
            <LSView>
              <LSText>Bedroom</LSText>
              <CheckBox
                tintColors={{true: AppStyles.color.DEFAULT_ORANGE}}
                value={this.state.livingSpace.bedroom}
                onValueChange={() => {
                  this.setState({
                    livingSpace: {
                      ...this.state.livingSpace,
                      bedroom: !this.state.livingSpace.bedroom,
                    },
                  });
                }}
              />
              <View />
            </LSView>
            <LSView>
              <LSText>Bathroom</LSText>
              <CheckBox
                tintColors={{true: AppStyles.color.DEFAULT_ORANGE}}
                value={this.state.livingSpace.bathroom}
                onValueChange={() => {
                  this.setState({
                    livingSpace: {
                      ...this.state.livingSpace,
                      bathroom: !this.state.livingSpace.bathroom,
                    },
                  });
                }}
              />
              <View />
            </LSView>
            <LSView>
              <LSText>Kitchen</LSText>
              <View>
                <NumericInput
                  value={this.state.livingSpace.kitchen}
                  minValue={0}
                  maxValue={5}
                  setValue={value => {
                    this.setState({
                      livingSpace: {
                        ...this.state.livingSpace,
                        kitchen: this.state.livingSpace.kitchen + value,
                      },
                    });
                  }}
                />
              </View>
            </LSView>
            <LSView>
              <LSText>Living Room</LSText>
              <View>
                <NumericInput
                  value={this.state.livingSpace.living}
                  minValue={0}
                  maxValue={3}
                  setValue={value => {
                    this.setState({
                      livingSpace: {
                        ...this.state.livingSpace,
                        living: this.state.livingSpace.living + value,
                      },
                    });
                  }}
                />
              </View>
            </LSView>
          </ComponentContainer>
          <ComponentContainer>
            <HeadingText title="Distance" />
            <SingleSlider
              setValue={this.setDistance}
              data={{
                values: distance,
                min: 500,
                max: 3000,
                color: AppStyles.color.DEFAULT_ORANGE,
              }}
            />
          </ComponentContainer>
          <ComponentContainer>
            <HeadingText title="Rent Duration" />
            <View style={{flexDirection: 'row'}}>{slides}</View>
          </ComponentContainer>
          <ComponentContainer>
            <HeadingText title="Price" />
            <RangeSlider
              setPrice={this.setPrice}
              data={{
                values: [min, max],
                min: 1000,
                max: 10000,
                step: 1000,
                color: AppStyles.color.DEFAULT_ORANGE,
              }}
            />
          </ComponentContainer>
          <ComponentContainer>
            <HeadingText title="Additional Preferences" />
            <View
              style={{
                flex: 1,
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
                padding: 4,
                flexDirection: 'row',
                marginBottom: 8,
              }}>
              {additionalButtons}
            </View>
          </ComponentContainer>
          <ComponentContainer>
            <ButtonsContainer>
              <PropertyButton
                style={{
                  backgroundColor: AppStyles.color.DEFAULT_WHITE,
                  color: AppStyles.color.HEADING_TEXT_COLOR,
                }}
                handleClick={this.handleReset}
                title="RESET"
              />
              <PropertyButton
                style={{
                  backgroundColor: AppStyles.color.DEFAULT_BLUE,
                  color: AppStyles.color.DEFAULT_WHITE,
                }}
                handleClick={this.handleApply}
                title="Apply"
              />
            </ButtonsContainer>
          </ComponentContainer>
        </ScrollView>
      </Container>
    );
  }
}

export default Discover;
