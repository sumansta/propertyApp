import React, {useState, useEffect} from 'react';
import {Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import firebase from 'react-native-firebase';
import LotteView from 'lottie-react-native';

import CircleButtons from '../../components/CircleButton';
import PropertyButton from '../../components/PropertyButton';
import PriceDetail from '../../components/PriceDetail';
import MapView from '../../components/MapView';

import AppStyles from '../../config/styles';
import images from '../../config/images';

import styles, {
  Container,
  TopContainer,
  DetailsContainer,
  ImageContainer,
  MapContainer,
  MapViewContainer,
  MapDetails,
  FeatureContainer,
  InfoContainer,
  ButtonsContainer,
  Text,
  View,
} from './style';

const Details = ({navigation}) => {
  const ref = firebase.firestore().collection('bestPicks');
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({});
  const [infoIcons] = useState([
    {name: 'ios-bed', detail: '2 bed'},
    {name: 'ios-home', detail: '2 bath'},
    {name: 'ios-albums', detail: '2050 sqft'},
  ]);

  fetchData = async () => {
    const id = navigation.getParam('id');
    await ref
      .doc(id)
      .get()
      .then(doc => {
        setDetails(doc.data());
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      {loading ? (
        <View style={{height: 150, width: 150}}>
          <LotteView source={images.loading} loop autoPlay />
        </View>
      ) : (
        <ScrollView nestedScrollEnabled={true}>
          <TopContainer>
            <ImageContainer
              onPress={() => {
                navigation.navigate('CarouselScreen', {
                  details: details.priceDetail,
                  images: details.images,
                });
              }}>
              <Image
                source={{uri: details.imageURL}}
                style={styles.image}
                resizeMode="cover"
              />
            </ImageContainer>

            <MapContainer>
              <MapViewContainer>
                <MapView style={{height: 120}} />
              </MapViewContainer>
              <MapDetails>
                <PriceDetail detail={details.priceDetail} />
              </MapDetails>
            </MapContainer>
          </TopContainer>
          <DetailsContainer>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <FeatureContainer>
                {details.features.map(data => {
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
              {infoIcons.map(data => {
                return (
                  <InfoIcon
                    key={data.name}
                    detail={{name: data.name, detail: data.detail}}
                  />
                );
              })}
            </InfoContainer>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={{paddingBottom: 64}}>{details.details}</Text>
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
  );
};

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

Details.navigationOptions = ({navigation}) => {
  return {
    title: 'Details',
  };
};

export default Details;
