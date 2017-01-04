import {
    GraphRequest,
    GraphRequestManager,
    AppEventsLogger
} from 'react-native-fbsdk';

import { store } from '../store';
import { socket } from '../socket';
import {
    events,
    actionTypes,
    modalTypes
} from '../constants';
import {
    setPlayer,
    findActiveFriends
} from '../actionCreators';

function responseInfoCallback(error, result) {
    if (error) {
        logEvent('Error', { message: error.toString() });
    } else {
        const params = {
            facebookId: result.id,
            name: result.first_name,
            image: result.picture.data.url
        };
        store.dispatch(setPlayer(params));
        socket.emit(events.players.login, params);
    }
}

function handleFriendList(err, result) {
    if (err) {
        logEvent('Error', { message: err.toString() });
    } else {
        const facebookIds = result.data.map(f => f.id);
        store.dispatch(findActiveFriends(facebookIds));
    }
}

export function requestData() {
    const url = '/me?fields=id,first_name,picture.type(large)';
    const infoRequest = new GraphRequest(url, null, responseInfoCallback);
    new GraphRequestManager().addRequest(infoRequest).start();
}

export function requestFriends() {
    const url = '/me/friends?fields=id,first_name,picture.type(large)';
    const infoRequest = new GraphRequest(url, null, handleFriendList);
    new GraphRequestManager().addRequest(infoRequest).start();
}

export function logEvent(event, params = {}) {
    AppEventsLogger.logEvent(event, null, params);
}