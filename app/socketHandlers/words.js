import { store } from '../store';
import { modalTypes } from '../constants';
import {
    incrementRound,
    setModalType,
    setOpponent,
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
    if (data.isValid) {
        const matchId = store.getState().players.get('matchId');
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
    const opponentScore = store.getState().score.get('opponent') + opponentWord.length;
    store.dispatch(setOpponent({ word: opponentWord, score: opponentScore }));
    store.dispatch(setModalType(modalTypes.roundOverDuel));
}