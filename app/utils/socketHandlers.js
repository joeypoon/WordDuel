import { store } from '../store';
import { modalTypes } from '../constants';
import {
    setModalType,
    loadLetterGrid
} from '../action_creators';

function isSolo() {
    return !store.getState().players.get('opponentName');
}

export const socketHandlers = {
    onValidateWord(data) {
        if (data.isValid) {
            if (!isSolo()) {
                store.dispatch(setModalType(modalTypes.roundOverDuel));
            } else {
                store.dispatch(setModalType(modalTypes.roundOverSolo));
            }
        } else {
            store.dispatch(setModalType(modalTypes.invalidWord));
        }
    },

    onNewGrid(data) {
        if (data) {
            const letters = data.map((letter, index) => {
                return { value: letter, position: index }
            });
            const grid = [
                letters.splice(0, 5),
                letters.splice(0, 5),
                letters.splice(0, 5),
                letters.splice(0, 5)
            ];
            store.dispatch(loadLetterGrid(grid));
        }
    }
}
