import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressDialog} from 'react-native-simple-dialogs';
import firebase from 'react-native-firebase';

import {saveBestPicks, markFavourites} from '../../store/actions';

import CardView from '../../components/CardView';
import FeatureButtons from '../../components/FeatureButtons';

import ToastExample from '../../utils/CustomToast';

import styles, {Container} from './style';

const Home = ({navigation}) => {
  const ref = firebase.firestore().collection('bestPicks');
  const [bestPicks, setBestPicks] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleFavourite = async ({id, favourite}) => {
    let toastMessage = favourite
      ? 'Removed from favourites'
      : 'Added to Favourites';
    ToastExample.show(toastMessage, ToastExample.SHORT);
    await ref.doc(id).update({favourite: !favourite});
  };

  useEffect(() => {
    return ref.onSnapshot(querySnapshot => {
      const list = [];
      querySnapshot.forEach(doc => {
        const data = doc.data();
        list.push({...data, id: doc.id});
      });
      setLoading(false);
      setBestPicks(list);
    });
  }, []);

  return (
    <Container>
      <ProgressDialog
        visible={loading}
        title="Loading"
        message="Fetching data"
      />
      <ScrollView>
        <Container style={styles.mainView}>
          <Text style={styles.headingText}>Best Picks</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {bestPicks.map(item => (
              <CardView
                favourite={item.favourite}
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
            ))}
          </ScrollView>
          <View style={styles.buttonContainer}>
            <FeatureButtons />
          </View>
          <Text style={styles.headingText}>Trending</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {/* <CardView iconName="ios-compass" image={images.image2} />
              <CardView image={images.image3} />
              <CardView iconName="ios-home" image={images.image4} /> */}
          </ScrollView>
        </Container>
      </ScrollView>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    bestPicks: state.bestPicks,
    loggedIn: state.loggedIn,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveBestPicks: data => dispatch(saveBestPicks(data)),
    markFavourites: data => dispatch(markFavourites(data)),
  };
};

Home.propTypes = {
  navigation: PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
