import { store } from '../store';
import {
    loadLetterGrid,
    setMatchId,
    setOpponentName,
    setModalVisible,
    setModalType,
    setTimerPause,
    setRoute
} from '../action_creators';
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
    store.dispatch(setMatchId(null));
    store.dispatch(setOpponentName(null));
    setModalType(modalTypes.playerDisconnect);
    setModalVisible(true);
}