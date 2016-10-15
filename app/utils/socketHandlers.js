import { store } from '../store';
import { actionCreator } from '../action_creators';
import { modalTypes } from '../constants';

function isSolo() {
    return !store.getState().players.get('opponentName');
}

export const socketHandlers = {
    onValidateWord (data) {
        if (data.isValid) {
            if (!isSolo()) {
                store.dispatch(actionCreator.setModalType(modalTypes.roundOverDuel));
            } else {
                store.dispatch(actionCreator.setModalType(modalTypes.roundOverSolo));
            }
        } else {
            store.dispatch(actionCreator.setModalType(modalTypes.invalidWord));
        }
    }
}