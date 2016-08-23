import React, {Component} from 'react';
import {Provider} from 'react-redux';

import Main from './Main';
import reducer from '../reducer';
import makeStore from '../store';

const store = makeStore(reducer);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        );
    }
}