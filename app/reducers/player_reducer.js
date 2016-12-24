import { actionTypes } from '../constants';

const initialState = new Map([
    ['facebookId', null],
    ['name', null],
    ['image', null],
    ['level', null],
    ['experience', null],
    ['requiredExp', null],
    ['socket', null],
    ['word', ''],
    ['score', 0],
    ['isReady', false],
    ['hasSubmitted', false],
    ['friends', []]
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
            return nextState.set('word', '')
                .set('score', 0)
                .set('isReady', false)
                .set('hasSubmitted', false);

        case actionTypes.clearWord:
            return nextState.set('word', '');

        case actionTypes.timeout:
            return nextState.set('hasSubmitted', true);

        case actionTypes.setFriends:
            return nextState.set('friends', action.friends);
    }
    return nextState;
}