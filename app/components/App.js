import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Main from './Main';
import { store } from '../store';
import { requestData } from '../utils/facebookUtils';
import { socket } from '../socket';

export default class App extends Component {
    componentDidMount() {
        socket.on('connect', () => console.log('Socket connected'));
        requestData();
    }

    render() {
        return <Provider store = { store }>
            <Main />
        </Provider>;
    }
}
