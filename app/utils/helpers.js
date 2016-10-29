import { socket } from '../socket';
import { events } from '../constants';
import { store } from '../store';
import {
    setRoute,
    clearMatch,
    clearOpponent,
    clearPlayer
} from '../actionCreators';

export function disconnect() {
    store.dispatch(setRoute('Menu'));
    const storeState = store.getState();
    const opponentSocket = storeState.opponent.get('socket');
    const matchId = storeState.match.get('id');

    if (matchId && opponentSocket) {
        const params = { socket: opponentSocket, matchId }
        socket.emit(events.matches.disconnect, params);
    }

    store.dispatch(clearMatch());
    store.dispatch(clearOpponent());
    store.dispatch(clearPlayer());
}