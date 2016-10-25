import { actionTypes } from '../constants';

const initialState = new Map([
    ['name', null],
    ['image', null],
    ['level', null],
    ['socket', null],
    ['word', null],
    ['score', 0],
    ['socket', null]
]);

export function opponent(state = initialState, action) {
    let nextState = new Map(state);

    switch (action.type) {

        case actionTypes.setOpponent:
            const keys = Object.keys(action.params);
            keys.forEach(key => {
                nextState.set(key, action.params[key]);
            });
            return nextState;

        case actionTypes.clearOpponent:
            return initialState;
    }
    return nextState;
}