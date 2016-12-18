import React, { Component } from 'react';
import { AppState } from 'react-native';
import { Provider } from 'react-redux';

import Main from './Main';
import { store } from '../store';
import { socket } from '../socket';
import { events } from '../constants';
import {
    requestData,
    adMobEventListeners,
    disconnect
} from '../utils';

import '../socketListeners';

function connect() {
    const facebookId = store.getState().player.get('facebookId');
    socket.emit(events.players.login, { facebookId });
}

export default class App extends Component {
    componentDidMount() {
        AppState.addEventListener('change', this.handleAppStateChange);
        requestData();
        adMobEventListeners();
    }

    handleAppStateChange() {
        if (AppState.currentState !== 'active') return disconnect();
        if (AppState.currentState === 'active') return connect();
    }

    render() {
        return <Provider store={ store }>
            <Main />
        </Provider>;
    }
}
