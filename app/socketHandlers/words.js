import { store } from '../store';
import { modalTypes, maxRounds } from '../constants';
import {
    incrementRound,
    resetRound,
    setModalType,
    setOpponentWord
} from '../action_creators';

function isSolo() {
    return !store.getState().players.get('opponentName');
}

function isLastRound() {
    const currentRound = store.getState().round;
    return currentRound >= maxRounds;
}

export function onWordValidate(data) {
    if (data.isValid) {
        store.dispatch(incrementRound());
        if (!isSolo())
            return store.dispatch(setModalType(modalTypes.roundOverDuel));
        return store.dispatch(setModalType(modalTypes.roundOverSolo));
    }
    return store.dispatch(setModalType(modalTypes.invalidWord));
}

export function onWordSubmit(data) {
    const { word } = data;
    if (word) store.dispatch(setOpponentWord(word));
}