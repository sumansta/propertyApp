import React, {Component} from 'react';
import {View, Text, ScrollView, RefreshControl} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressDialog} from 'react-native-simple-dialogs';
import Toast from 'react-native-easy-toast';

import {fetchBestPicks} from '../../api/property';
import {saveBestPicks, markFavourites} from '../../store/actions';

import CardView from '../../components/CardView';
import RoundedButton from '../../components/RoundedButton';

import styles, {Container} from './style';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.fetch();
  }

  handleFavourite(item) {
    this.props.markFavourites(item);
    this.toast.show('Added to favourites');
  }

  async fetch() {
    try {
      const response = await fetchBestPicks();
      if (response) {
        this.props.saveBestPicks(response.data);
        this.setState({loading: false});
      }
    } catch (e) {
      this.setState({loading: false});
    }
  }

  async refreshPage() {
    this.setState({refreshing: true});
    await this.fetch();
    this.setState({refreshing: false});
  }

  render() {
    return (
      <Container>
        <Toast
          fadeInDuration={750}
          fadeOutDuration={1000}
          style={{bottom: 64}}
          ref={toast => {
            this.toast = toast;
          }}
        />
        <ProgressDialog
          visible={this.state.loading}
          title="Loading"
          message="Fetching data"
        />
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.refreshPage}
            />
          }>
          <Container style={styles.mainView}>
            <Text style={styles.headingText}>Best Picks</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {this.props.bestPicks.map(item => (
                <CardView
                  key={item.id}
                  handleNavigation={() => {
                    this.props.navigation.navigate('DetailsScreen', {
                      id: item.id,
                      title: item.heading,
                    });
                  }}
                  showToast={() => {
                    this.handleFavourite(item);
                  }}
                  image={{uri: item.imageURL}}
                  iconName={item.icon}
                  title={item.heading}
                  description={item.description}
                />
              ))}
            </ScrollView>
            <View style={styles.buttonContainer}>
              <RoundedButton title="Top Seller" />
              <RoundedButton />
              <RoundedButton title="School" />
              <RoundedButton title="Cultural Space" />
            </View>
            <Text style={styles.headingText}>Trending</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {/* <CardView iconName="ios-compass" image={images.image2} />
              <CardView image={images.image3} />
              <CardView iconName="ios-home" image={images.image4} /> */}
            </ScrollView>
          </Container>
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    bestPicks: state.bestPicks,
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
