import { store } from '../store';
import {
    loadLetterGrid,
    clearMatch,
    clearOpponent,
    setModalVisible,
    setModalType,
    setTimerPause,
    setRoute
} from '../actionCreators';
import { socket } from '../socket';
import { events, modalTypes } from '../constants';

export function onGridNew(data) {
    const matchId = store.getState().players.get('matchId');
    store.dispatch(setModalType(modalTypes.loading));
    store.dispatch(setModalVisible(true));
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
        if (!matchId) store.dispatch(setRoute('Solo'));
        store.dispatch(setModalVisible(false));
        store.dispatch(setTimerPause(false));
    }
}

export function onMatchDisconnect() {
    store.dispatch(clearMatch());
    store.dispatch(clearOpponent());
    store.dispatch(setModalType(modalTypes.playerDisconnect));
    store.dispatch(setModalVisible(true));
}