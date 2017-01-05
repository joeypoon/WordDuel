import { actionTypes } from '../constants';

const initialState = new Map([
    ['name', null],
    ['image', null],
    ['level', null],
    ['socket', null],
    ['shouldShow', false]
]);

export function challenge(state = initialState, action) {
    let nextState = new Map(state);

    switch (action.type) {

        case actionTypes.setChallenger:
            if (action.params) {
                const keys = Object.keys(action.params);
                keys.forEach(key => {
                    nextState.set(key, action.params[key]);
                });
            }
            return nextState;

        case actionTypes.clearChallenger:
            return initialState;
    }
    return nextState;
}