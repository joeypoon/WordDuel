import { socket } from '../socket';
import { events } from '../constants';
import { store } from '../store';
import {
    setRoute,
    clearMatch,
    clearOpponent,
    clearPlayer,
    setModalVisible,
    clearChallenger,
    cancelSearch
} from '../actionCreators';

function clearData() {
    store.dispatch(clearMatch());
    store.dispatch(clearOpponent());
    store.dispatch(clearPlayer());
    store.dispatch(clearChallenger());
    store.dispatch(setModalVisible(false));
}

function emitDisconnect(opponentSocket, matchId) {
    const params = { socket: opponentSocket, matchId };
    socket.emit(events.matches.disconnect, params);
}

export function disconnect() {
    store.dispatch(setRoute('Menu'));
    const storeState = store.getState();
    const opponentSocket = storeState.opponent.get('socket');
    const matchId = storeState.match.get('id');
    const facebookId = storeState.player.get('facebookId');
    emitDisconnect(opponentSocket, matchId);
    store.dispatch(cancelSearch(facebookId));
    clearData();
}