import { store } from '../store';
import { modalTypes } from '../constants';
import {
    setModalType,
    setOpponent,
    setMatchId,
    setModalVisible,
    setTimerPause
} from '../actionCreators';

export function onFound(data) {
    const opponent = data.players.find(p => {
        return p.facebookId !== store.getState().player.get('facebookId')
    });
    store.dispatch(setOpponent(opponent));
    store.dispatch(setMatchId(data.matchId));
    store.dispatch(setModalType(modalTypes.opponentFound));
}

export function onReady() {
    const playerReady = store.getState().player.get('isReady');
    if (playerReady) {
        store.dispatch(setModalVisible(false));
        store.dispatch(setTimerPause(false));
    } else {
        store.dispatch(setOpponent({ isReady: true }));
    }
}