import { store } from '../store';
import { modalTypes } from '../constants';
import {
    incrementRound,
    setModalType,
    setOpponent,
    submitWord
} from '../actionCreators';

function isDuel() {
    return !!store.getState().match.get('id');
}

function getOpponentWord(words) {
    const playerWord = store.getState().player.get('word');
    return words[0] === playerWord ? words[1] : words[0];
}

export function onWordValidate(data) {
    if (data.isValid) {
        const matchId = store.getState().match.get('id');
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
    const opponentScore = store.getState().opponent.get('score') + opponentWord.length;
    store.dispatch(setOpponent({ word: opponentWord, score: opponentScore }));
    store.dispatch(setModalType(modalTypes.roundOverDuel));
}