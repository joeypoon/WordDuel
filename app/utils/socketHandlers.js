import { store } from '../store';
import { modalTypes } from '../constants';
import {
    setModalType,
    loadLetterGrid,
    setOpponentName,
    setOpponentImage,
    setMatchId,
    setModalVisible,
    setTimerPause
} from '../action_creators';

function isSolo() {
    return !store.getState().players.get('opponentName');
}

export const socketHandlers = {
    // words
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

    // matches
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

    // players
    onPlayerFound(data) {
        const opponent = data.players.find(p => {
            return p.facebookId !== store.getState().players.get('facebookId')
        });
        const { name, image } = opponent;
        store.dispatch(setOpponentName(name));
        store.dispatch(setOpponentImage(image));
        store.dispatch(setMatchId(data.matchId));
        store.dispatch(setModalType(modalTypes.opponentFound));
    },

    onPlayerReady(data) {
            store.dispatch(setModalVisible(false));
            store.dispatch(setTimerPause(false));
    }
}
