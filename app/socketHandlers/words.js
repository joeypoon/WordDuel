import { store } from '../store';
import { modalTypes } from '../constants';
import {
    incrementRound,
    resetRound,
    setModalType
} from '../action_creators';

function isSolo() {
    return !store.getState().players.get('opponentName');
}

export function onWordValidate(data) {
    if (data.isValid) {
        const currentRound = store.getState().round;
        if (currentRound > 9) {
            store.dispatch(resetRound());
        } else {
            store.dispatch(incrementRound());
        }
        if (!isSolo())
            return store.dispatch(setModalType(modalTypes.roundOverDuel));
        return store.dispatch(setModalType(modalTypes.roundOverSolo));
    }
    return store.dispatch(setModalType(modalTypes.invalidWord));
}