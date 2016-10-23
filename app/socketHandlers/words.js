import { store } from '../store';
import { modalTypes } from '../constants';
import {
    incrementRound,
    setModalType,
    setOpponentWord,
    submitWord
} from '../action_creators';

function isDuel() {
    return !!store.getState().players.get('matchId');
}

function getOpponentWord(words) {
    const playerWord = store.getState().wordDisplay;
    return words[0] === playerWord ? words[1] : words[0];
}

export function onWordValidate(data) {
    const storePlayers = store.getState().players;
    const matchId = storePlayers.get('matchId');
    if (data.isValid) {
        store.dispatch(incrementRound());
        if (isDuel()) {
            store.dispatch(setModalType(modalTypes.waiting));
            return store.dispatch(submitWord(matchId, data.word));
        }
        return store.dispatch(setModalType(modalTypes.roundOverSolo));
    }
    return store.dispatch(setModalType(modalTypes.invalidWord));
}

export function onWordSubmit(words) {
    const opponentWord = getOpponentWord(words);
    store.dispatch(setOpponentWord(opponentWord));
    store.dispatch(setModalType(modalTypes.roundOverDuel));
}