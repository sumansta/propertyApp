import React, {Component} from 'react';
import {Image, ScrollView} from 'react-native';
import {ProgressDialog} from 'react-native-simple-dialogs';
import Icon from 'react-native-vector-icons/Ionicons';

import CircleButtons from '../../components/CircleButton';
import PropertyButton from '../../components/PropertyButton';
import PriceDetail from '../../components/PriceDetail';

import {fetchDetails} from '../../api/property';
import AppStyles from '../../config/styles';

import styles, {
  Container,
  TopContainer,
  DetailsContainer,
  ImageContainer,
  MapContainer,
  MapView,
  MapDetails,
  FeatureContainer,
  InfoContainer,
  ButtonsContainer,
  Text,
  View,
} from './style';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      networkError: false,
      details: {},
      features: [],
      infoIcons: [
        {name: 'ios-bed', detail: '2 bed'},
        {name: 'ios-home', detail: '2 bath'},
        {name: 'ios-albums', detail: '2050 sqft'},
      ],
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('title', 'Details'),
    };
  };

  componentDidMount() {
    this.fetchDetails();
  }
  async fetchDetails() {
    try {
      let id = this.props.navigation.getParam('id');
      const details = await fetchDetails(id);
      this.setState({
        details: details.data,
        features: details.data.features,
        loading: false,
      });
    } catch (e) {
      this.refs.toast.show('Error fetching data');
      this.setState({loading: false, networkError: true});
    }
  }

  render() {
    return (
      !this.state.networkError && (
        <Container>
          <ProgressDialog
            visible={this.state.loading}
            title="Loading"
            message="Fetching data"
          />
          {!this.state.loading && (
            <ScrollView nestedScrollEnabled={true}>
              <TopContainer>
                <ImageContainer
                  onPress={() => {
                    this.props.navigation.navigate('CarouselScreen');
                  }}>
                  <Image
                    source={{uri: this.state.details.imageURL}}
                    style={styles.image}
                    resizeMode="cover"
                  />
                </ImageContainer>

                <MapContainer>
                  <MapView></MapView>
                  <MapDetails>
                    <PriceDetail detail={this.state.details.priceDetail} />
                  </MapDetails>
                </MapContainer>
              </TopContainer>
              <DetailsContainer>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    <FeatureContainer>
                      {this.state.features.map(data => {
                        return (
                          <CircleButtons
                            key={data.title}
                            style={styles.circleButton}
                            backgroundColor={AppStyles.color.DEFAULT_WHITE}
                            color="red"
                            name={data.icon}
                            title={data.title}
                          />
                        );
                      })}
                    </FeatureContainer>
                  </ScrollView>
                  <InfoContainer>
                    {this.state.infoIcons.map(data => {
                      return (
                        <InfoIcon
                          key={data.name}
                          detail={{name: data.name, detail: data.detail}}
                        />
                      );
                    })}
                  </InfoContainer>
                  <Text style={{paddingBottom: 64}}>
                    {this.state.details.details}
                  </Text>
                </ScrollView>
              </DetailsContainer>
              <ButtonsContainer>
                <PropertyButton
                  style={{
                    backgroundColor: AppStyles.color.DEFAULT_WHITE,
                    color: AppStyles.color.HEADING_TEXT_COLOR,
                  }}
                  title="Contact"
                />
                <PropertyButton
                  style={{
                    backgroundColor: AppStyles.color.DEFAULT_BLUE,
                    color: AppStyles.color.DEFAULT_WHITE,
                  }}
                  title="Book"
                />
              </ButtonsContainer>
            </ScrollView>
          )}
        </Container>
      )
    );
  }
}

const InfoIcon = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'space-between',
        marginHorizontal: 8,
      }}>
      <Icon
        name={props.detail.name}
        size={16}
        color={AppStyles.color.NORMAL_TEXT_COLOR}></Icon>
      <Text style={{fontWeight: 'bold', marginHorizontal: 8}}>
        {props.detail.detail}
      </Text>
    </View>
  );
};

export default Details;
