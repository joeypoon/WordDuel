import { store } from '../store';
import { modalTypes } from '../constants';
import {
    setModalType,
    loadLetterGrid,
    setOpponentName,
    setOpponentImage
} from '../action_creators';

function isSolo() {
    return !store.getState().players.get('opponentName');
}

export const socketHandlers = {
    onWordValidate(data) {
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

    onGridNew(data) {
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
    },

    onPlayerFound(data) {
        const opponent = data.players.find(p => {
            return p.facebookId !== store.getState().players.get('facebookId')
        });
        const { name, image } = opponent;
        store.dispatch(setOpponentName(name));
        store.dispatch(setOpponentImage(image));
        store.dispatch(setModalType(modalTypes.opponentFound));
    }
}
