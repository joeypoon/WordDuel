import {
    GraphRequest,
    GraphRequestManager,
    AppEventsLogger
} from 'react-native-fbsdk';

import { store } from '../store';
import { socket } from '../socket';
import { events, actionTypes } from '../constants';
import {
    setPlayer
} from '../action_creators';

function responseInfoCallback(error, result) {
    if (error) {
        logEvent('error', null, { message: error.toString() });
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

export function requestData() {
    const url = '/me?fields=id,first_name,picture.type(large)';
    const infoRequest = new GraphRequest(url, null, responseInfoCallback);
    new GraphRequestManager().addRequest(infoRequest).start();
}

export function logEvent(event) {
    AppEventsLogger.logEvent(event);
}