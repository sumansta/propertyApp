import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import firebase from 'react-native-firebase';

import Icon from 'react-native-vector-icons/MaterialIcons';

import AppStyles from '../../config/styles';
import ToastExample from '../../utils/CustomToast';

import {Container, EmptyContainer} from './style';

import CardView from '../../components/CardView';
import HeadingText from '../../components/HeadingText';
import SimpleButton from '../../components/SimpleButton';
import {ScrollView} from 'react-native-gesture-handler';

const mapStateToProps = state => {
  return {favourites: state.favourites};
};

const Favourite = ({navigation}) => {
  const ref = firebase.firestore().collection('bestPicks');

  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    return ref.onSnapshot(querySnapshot => {
      const list = [];
      querySnapshot.forEach(doc => {
        const data = doc.data();
        if (data.favourite) {
          list.push({...data, id: doc.id});
        }
      });
      setFavourites(list);
    });
  }, []);

  const toggleFavourite = async ({id, favourite}) => {
    let toastMessage = favourite
      ? 'Removed from favourites'
      : 'Added to Favourites';
    ToastExample.show(toastMessage, ToastExample.SHORT);
    await ref.doc(id).update({favourite: !favourite});
  };

  handleExploreHomes = () => {
    navigation.navigate('Home');
  };

  return (
    <Container>
      <HeadingText title="My Favourites" />
      {favourites && favourites.length > 0 ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          {favourites.map(item => {
            return (
              <CardView
                favourite={item.favourite}
                style={{width: '95%'}}
                key={item.id}
                handleNavigation={() => {
                  navigation.navigate('DetailsScreen', {
                    id: item.id,
                    title: item.heading,
                  });
                }}
                showToast={() => {
                  toggleFavourite(item);
                }}
                image={{uri: item.imageURL}}
                iconName={item.icon}
                title={item.heading}
                description={item.description}
              />
            );
          })}
        </ScrollView>
      ) : (
        <EmptyContainer>
          <Icon
            name="hourglass-empty"
            style={{
              alignSelf: 'center',
              fontSize: 128,
              color: AppStyles.color.DEFAULT_ORANGE,
            }}></Icon>
          <View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                color: AppStyles.color.NORMAL_TEXT_COLOR,
                textAlign: 'center',
              }}>
              Your favourites list is empty !
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: AppStyles.color.NORMAL_TEXT_COLOR,
                textAlign: 'center',
              }}>
              Explore properties and add them to favourites to show them here
            </Text>
          </View>
          <SimpleButton title="Explore Homes" onPress={handleExploreHomes} />
        </EmptyContainer>
      )}
    </Container>
  );
};

export default connect(mapStateToProps)(Favourite);
