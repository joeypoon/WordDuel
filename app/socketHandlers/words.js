import { store } from '../store';
import { modalTypes } from '../constants';
import {
    setModalType,
    setOpponent,
    setPlayer
} from '../actionCreators';

function isDuel() {
    return !!store.getState().opponent.get('socket');
}

export function onWordValidate(data) {
    const { isValid } = data;
    if (!isValid) return store.dispatch(setModalType(modalTypes.invalidWord));
    if (!isDuel()) return store.dispatch(setModalType(modalTypes.roundOverSolo));
    store.dispatch(setPlayer({ hasSubmitted: true }));
}

// only on duel
export function onWordSubmit(data) {
    const hasSubmitted = store.getState().player.get('hasSubmitted');
    store.dispatch(setOpponent({ word: data.word }));
    if (hasSubmitted)
        store.dispatch(setModalType(modalTypes.roundOverDuel));
}