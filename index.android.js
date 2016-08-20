import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

import Main from './app/components/Main';

class WordDuel extends Component {
  render() {
    return (
      <Main />
    );
  }
}

AppRegistry.registerComponent('WordDuel', () => WordDuel);
