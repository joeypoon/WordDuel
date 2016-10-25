import { actionTypes } from '../constants';

const initialState = new Map([
    ['facebookId', null],
    ['name', null],
    ['image', null],
    ['level', null],
    ['socket', null],
    ['word', ''],
    ['score', 0],
    ['isReady', false],
    ['hasSubmitted', false]
]);

export function player(state = initialState, action) {
    let nextState = new Map(state);

    switch (action.type) {

        case actionTypes.setPlayer:
            const keys = Object.keys(action.params);
            keys.forEach(key => {
                nextState.set(key, action.params[key]);
            });
            return nextState;

        case actionTypes.clearPlayer:
            return initialState;
    }
    return nextState;
}