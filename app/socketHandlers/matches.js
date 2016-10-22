import { store } from '../store';
import {
    loadLetterGrid,
    setMatchId,
    setOpponentName,
    setModalVisible,
    setModalType
} from '../action_creators';
import { socket } from '../socket';
import { events, modalTypes } from '../constants';

export function onGridNew(data) {
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

export function onMatchDisconnect() {
    store.dispatch(setMatchId(null));
    store.dispatch(setOpponentName(null));
    setModalType(modalTypes.playerDisconnect);
    setModalVisible(true);
}