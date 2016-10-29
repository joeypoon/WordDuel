import React, { Component } from 'react';
import { AppState } from 'react-native';
import { Provider } from 'react-redux';

import Main from './Main';
import { store } from '../store';
import {
    requestData,
    adMobEventListeners,
    disconnect
} from '../utils';

import '../socketListeners';

export default class App extends Component {
    componentDidMount() {
        AppState.addEventListener('change', this.handleAppStateChange);
        requestData();
        adMobEventListeners();
    }

    handleAppStateChange() {
        if (AppState.currentState !== 'active')
            disconnect();
    }

    render() {
        return <Provider store={ store }>
            <Main />
        </Provider>;
    }
}
