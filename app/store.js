import {createStore} from 'redux';

export default function makeStore (reducer) {
    return createStore(reducer);
}