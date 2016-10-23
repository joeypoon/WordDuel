import { store } from '../store';
import { modalTypes, maxRounds } from '../constants';
import {
    incrementRound,
    resetRound,
    setModalType,
    setOpponentWord,
    submitWord
} from '../action_creators';

function isDuel() {
    return !!store.getState().players.get('matchId');
}

function isLastRound() {
    const currentRound = store.getState().round;
    return currentRound >= maxRounds;
}

export function onWordValidate(data) {
    const storePlayers = store.getState().players;
    const matchId = storePlayers.get('matchId');
    const facebookId = storePlayers.get('facebookId');
    if (data.isValid) {
        store.dispatch(incrementRound());
        if (isDuel()) {
            store.dispatch(setModalType(modalTypes.waiting));
            return store.dispatch(submitWord(matchId, facebookId, data.word));
        }
        return store.dispatch(setModalType(modalTypes.roundOverSolo));
    }
    return store.dispatch(setModalType(modalTypes.invalidWord));
}

export function onWordSubmit(data) {
    const { word, facebookId } = data;
    const playerFbId = store.getState().players.get('facebookId');
    if (playerFbId !== facebookId) {
        store.dispatch(setOpponentWord(word));
        store.dispatch(setModalType(modalTypes.roundOverDuel));
    }
}