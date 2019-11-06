import React, {useState, useEffect} from 'react';
import firebase from 'react-native-firebase';
import {Text, ScrollView} from 'react-native';

import RoundedButton from '../RoundedButton';

import {View} from './style';

function FeatureButtons() {
  const ref = firebase.firestore().collection('features');
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    return ref.onSnapshot(querySnapshot => {
      const list = [];
      querySnapshot.forEach(doc => {
        const {title} = doc.data();
        list.push({id: doc.id, title});
      });
      setFeatures(list);
    });
  }, []);

  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{flexDirection: 'row'}}>
        {features.map(item => {
          return <RoundedButton key={item.id} title={item.title} />;
        })}
      </ScrollView>
    </View>
  );
}

export default FeatureButtons;
