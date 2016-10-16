import { logEvent } from './index';
import { playersUrl } from '../constants';
import { store } from '../store';
import { setModalType, setModalVisible } from '../action_creators';

function get(url) {
    return fetch(url).catch(catchException);
}

function post(url, body) {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(body)
    }).catch(catchException);
}

function put(url, body) {
    return fetch(url, {
        method: 'PUT',
        body: JSON.stringify(body)
    }).catch(catchException);
}

function catchException(err) {
    // error modal
    logEvent('error', null, err);
}

export function postPlayers(body) {
    post(playersUrl, body);
}

export function findOpponent(facebookId) {
    store.dispatch(setModalType('searching'));
    store.dispatch(setModalVisible(true));

    const url = `${ playersUrl }/${ facebookId }`
    const body = { isSearching: true };
    put(url, body).then(res => {
        store.dispatch(setMatchId(res.matchId));
        store.dispatch(setOpponentName(res.name));
        store.dispatch(setOpponentImage(res.image));
        store.dispatch(setOpponentLevel(res.level));
        store.dispatch(setModalType('opponentFound'));
    });
}
