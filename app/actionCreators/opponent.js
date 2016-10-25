import { events, actionTypes } from '../constants';

export function setOpponent(params) {
    return {
        type: actionTypes.setOpponent,
        params
    };
}

export function clearOpponent() {
    return {
        type: actionTypes.clearOpponent
    };
}