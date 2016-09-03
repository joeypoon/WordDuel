const INITIAL_STATE = 30;

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'DECREMENT_TIMER':
            return state - 1;
        case 'RESET_TIMER':
            return INITIAL_STATE;
    }
    return state;
}