import { logEvent } from './facebookUtils';
import { postPlayersUrl } from '../constants/urls';

function get (url) {
    return fetch(url).catch(catchException);
}

function post (url, body) {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(body)
    }).catch(catchException);
}

function put (url, body) {
    return fetch(url, {
        method: 'PUT',
        body: JSON.stringify(body)
    }).catch(catchException);
}

function catchException (err) {
    // error modal
    logEvent('error', null, err);
}

export function postPlayers (body) {
    post(postPlayersUrl, body);
}