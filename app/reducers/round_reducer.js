const INITIAL_STATE = 1;

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_ROUND':
            return action.round;
    }
    return state;
}