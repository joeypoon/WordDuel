import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

import App from './app/components/App';

class WordDuel extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('WordDuel', () => WordDuel);
