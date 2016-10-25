import { store } from '../store';
import { modalTypes } from '../constants';
import {
    setModalType,
    setOpponent,
    setMatchId,
    setModalVisible
} from '../actionCreators';

export function onPlayerFound(data) {
    const opponent = data.players.find(p => {
        return p.facebookId !== store.getState().players.get('facebookId')
    });
    store.dispatch(setOpponent(opponent));
    store.dispatch(setMatchId(data.matchId));
    store.dispatch(setModalType(modalTypes.opponentFound));
}