import { store } from '../store';
import {
    setModalVisible,
    setModalType
} from '../actionCreators';
import { modalTypes } from '../constants';

export function onMatchDisconnect() {
    store.dispatch(setModalType(modalTypes.playerDisconnect));
    store.dispatch(setModalVisible(true));
}