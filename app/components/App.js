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
    constructor(props) {
        super(props);
        this.lastState = null;
    }

    componentDidMount() {
        AppState.addEventListener('change', this.handleAppStateChange);
        requestData();
        adMobEventListeners();
    }

    handleAppStateChange() {
        if (this.lastState === 'active' && AppState.currentState !== 'active')
            disconnect();
        this.lastState = AppState.currentState;
    }

    render() {
        return <Provider store={ store }>
            <Main />
        </Provider>;
    }
}
