import { store } from '../store';
import {
    setModalVisible,
    setModalType
} from '../actionCreators';
import { modalTypes } from '../constants';

export function onMatchDisconnect() {
    const opponentSocket = store.getState().opponent.get('socket');
    if (opponentSocket) {
        store.dispatch(setModalType(modalTypes.playerDisconnect));
        store.dispatch(setModalVisible(true));
    }
}