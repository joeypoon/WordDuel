import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Main from './Main';
import { store } from '../store';
import { requestData, fetchToken } from '../utils/facebookUtils';

export default class App extends Component {
    componentDidMount() {
        fetchToken()
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