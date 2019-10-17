import React, {Component} from 'react';
import {Provider} from 'react-redux';

import {persistor, store} from './store/index';
import {PersistGate} from 'redux-persist/integration/react';

import Navigator from './navigation';

class EntryPoint extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navigator />
        </PersistGate>
      </Provider>
    );
  }
}

export default EntryPoint;
