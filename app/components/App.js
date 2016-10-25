import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Main from './Main';
import { store } from '../store';
import {
    requestData,
    adMobEventListeners
} from '../utils';

import '../socketListeners';

export default class App extends Component {
    componentDidMount() {
        requestData();
        adMobEventListeners();
    }

    render() {
        return <Provider store={ store }>
            <Main />
        </Provider>;
    }
}
