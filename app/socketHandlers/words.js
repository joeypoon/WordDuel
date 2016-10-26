import { store } from '../store';
import { modalTypes } from '../constants';
import {
    setModalType,
    setModalVisible,
    setOpponent,
    setPlayer,
    setTimerPause
} from '../actionCreators';

function isDuel() {
    return !!store.getState().opponent.get('socket');
}

export function onWordValidate(data) {
    const { isValid } = data;
    const opponentWord = store.getState().opponent.get('word');
    if (!isValid) return store.dispatch(setModalType(modalTypes.invalidWord));

    if (!isDuel()) {
        store.dispatch(setModalType(modalTypes.roundOver));
        store.dispatch(setModalVisible(true));
        return;
    }

    if (opponentWord) {
        store.dispatch(setModalType(modalTypes.roundOver));
        return;
    }

    store.dispatch(setPlayer({ hasSubmitted: true }));
    store.dispatch(setModalType(modalTypes.waiting));
}

// only on duel
export function onWordSubmit(data) {
    const hasSubmitted = store.getState().player.get('hasSubmitted');
    store.dispatch(setOpponent({ word: data.word }));
    if (hasSubmitted)
        store.dispatch(setModalType(modalTypes.roundOver));
}