import React, { Component } from 'react';
import { Provider } from 'react-redux';
import io from 'socket.io-client/socket.io';

import Main from './Main';
import { store } from '../store';
import { requestData } from '../utils/facebookUtils';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.socket = io('http://localhost:3000', { jsonp: false });
        this.socket.on('connect', () => {
          console.log('connected!');
        });
    }

    componentDidMount() {
        requestData();
    }

    render() {
        return (
            <Provider store={ store }>
                <Main />
            </Provider>
        );
    }
}