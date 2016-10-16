import {
  GraphRequest,
  GraphRequestManager,
  AppEventsLogger
} from 'react-native-fbsdk';

import { store } from '../store';
import { socket } from '../socket';
import { events } from '../constants';

const requestManager = new GraphRequestManager();

function responseInfoCallback (error: ?Object, result: ?Object) {
    if (error) {
        logEvent('error', null, { message: error.toString() });
    } else {
        const facebookId = result.id;
        const name = result.first_name;
        const image = result.picture.data.url;
        store.dispatch({
            type: 'SET_FACEBOOK_ID',
            id: facebookId
        });
        store.dispatch({
            type: 'SET_PLAYER_NAME',
            name
        });
        store.dispatch({
            type: 'SET_PLAYER_IMAGE',
            image
        });
        socket.emit(events.players.login, { facebookId, name, image });
    }
}

export function requestData () {
    const url = '/me?fields=id,first_name,picture.type(large)';
    const infoRequest = new GraphRequest(url, null, responseInfoCallback);
    requestManager.addRequest(infoRequest).start();
}

export function logEvent (event) {
    AppEventsLogger.logEvent(event);
}