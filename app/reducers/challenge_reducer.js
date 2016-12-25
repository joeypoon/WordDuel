import { actionTypes } from '../constants';

const initialState = new Map([
    ['name', 'Kim'],
    ['image', 'https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/13015652_10153451923521791_1875785095944156979_n.jpg?oh=893da77e1ee92ec83374b2b000c0fe73&oe=589721E8'],
    ['level', null],
    ['socket', null]
]);

export function challenge(state = initialState, action) {
    let nextState = new Map(state);

    switch (action.type) {

        case actionTypes.setChallenger:
            const keys = Object.keys(action.params);
            keys.forEach(key => {
                nextState.set(key, action.params[key]);
            });
            return nextState;

        case actionTypes.clearChallenger:
            return initialState;
    }
    return nextState;
}