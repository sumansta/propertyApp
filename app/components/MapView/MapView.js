import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(
  'pk.eyJ1Ijoic3VtYW5zdGEiLCJhIjoiY2sybzdsOW1iMHhqaTNocXUyOWdkcjhuNiJ9.b07cCSZLXEr4RY2KhO2IFA',
);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    backgroundColor: 'tomato',
  },
  map: {
    flex: 1,
  },
});

export default class MapView extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    MapboxGL.setTelemetryEnabled(false);
  }

  render() {
    return (
      <View style={{...styles.container, ...this.props.style}}>
        <MapboxGL.MapView
          styleURL={MapboxGL.StyleURL.Stree}
          compassEnabled={true}
          style={styles.map}>
          <MapboxGL.Camera
            centerCoordinate={[85.327469, 27.707383]}
            zoomLevel={12}
          />
        </MapboxGL.MapView>
      </View>
    );
  }
}
