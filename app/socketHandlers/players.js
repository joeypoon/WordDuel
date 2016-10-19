import { store } from '../store';
import { modalTypes } from '../constants';
import {
    setModalType,
    setOpponentName,
    setOpponentImage,
    setMatchId,
    setModalVisible,
    setTimerPause
} from '../action_creators';

export function onPlayerFound(data) {
    data.players.find(p => {
        p.facebookId !== store.getState().players.get('facebookId')
    }).then(opponent => {
        const { name, image } = opponent;
        store.dispatch(setOpponentName(name));
        store.dispatch(setOpponentImage(image));
        store.dispatch(setMatchId(data.matchId));
        store.dispatch(setModalType(modalTypes.opponentFound));
    });
}

export function onPlayerReady(data) {
        store.dispatch(setModalVisible(false));
        store.dispatch(setTimerPause(false));
}