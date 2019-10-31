import React, {Component} from 'react';
import {Text} from 'react-native';
import {Container, View, ButtonsContainer} from './style';
import _get from 'lodash';

import AppStyles from '../../config/styles';

import HeadingText from '../../components/HeadingText';
import RangeSlider from '../../components/RangeSlider';
import RoundedButton from '../../components/RoundedButton';
import PropertyButton from '../../components/PropertyButton';

class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: false,
      additionalButtons: [],
      showMore: true,
      showMoreTitle: 'More >>',
      buttonsToShow: 2,
      additionalPreferences: [
        {id: 1, title: 'Parks Nearby', active: true, status: 'active'},
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
    this.setState({additionalButtons: this.generateAdditionalPreference(2)});
  }

  generateAdditionalPreference(buttonsLength = 2) {
    let additionalPreferences = this.state.additionalPreferences;
    let additionalButtons = [];
    for (let i = 0; i < buttonsLength; i++) {
      let data = additionalPreferences[i];
      additionalButtons.push(
        <RoundedButton
          key={data.id}
          active={data.active}
          title={data.title}
          status={data.status}
          handleClick={() => {
            let objIndex = additionalPreferences.findIndex(
              obj => obj.id == data.id,
            );
            if (additionalPreferences[objIndex].status == 'active') {
              additionalPreferences[objIndex].status = 'inactive';
              this.generateAdditionalPreference(this.state.buttonsToShow);
            } else {
              additionalPreferences[objIndex].status = 'active';
              this.generateAdditionalPreference(this.state.buttonsToShow);
            }
          }}
        />,
      );
    }

    if (this.state.showMore) {
      this.setState({
        showMoreTitle: '<< Less',
        buttonsToShow: this.state.additionalPreferences.length,
      });
    } else {
      this.setState({
        showMoreTitle: 'More >>',
        buttonsToShow: 2,
      });
    }
    additionalButtons.push(
      <RoundedButton
        title={this.state.showMoreTitle}
        handleClick={() => {
          this.setState({
            additionalButtons: [
              ...this.generateAdditionalPreference(this.state.buttonsToShow),
            ],
            showMore: !this.state.showMore,
          });
        }}
      />,
    );
    return additionalButtons;
  }

  render() {
    return this.state.test ? (
      <Text>SS</Text>
    ) : (
      <Container>
        <HeadingText title="Rent Duration" />
        <HeadingText title="Price" />
        <RangeSlider
          data={{
            values: [1000, 10000],
            min: 1000,
            max: 10000,
            step: 1000,
            color: AppStyles.color.DEFAULT_ORANGE,
          }}
        />
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
          {this.state.additionalButtons}
        </View>
        <ButtonsContainer>
          <PropertyButton
            style={{
              backgroundColor: AppStyles.color.DEFAULT_WHITE,
              color: AppStyles.color.HEADING_TEXT_COLOR,
            }}
            title="RESET"
          />
          <PropertyButton
            style={{
              backgroundColor: AppStyles.color.DEFAULT_BLUE,
              color: AppStyles.color.DEFAULT_WHITE,
            }}
            title="Apply"
          />
        </ButtonsContainer>
      </Container>
    );
  }
}

export default Discover;
