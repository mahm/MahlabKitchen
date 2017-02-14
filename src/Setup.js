import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './configureStore';
import App from './App';

export default class Setup extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <App />
      </Provider>
    );
  }
}
