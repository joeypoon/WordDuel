import { store } from '../store';
import { setOpponent } from '../actionCreators';

export function onOpponentTransmit(data) {
    store.dispatch(setOpponent(data));
}