const INITIAL_STATE = 30;

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'DECREMENT_TIMER':
            const nextState = state > 0 ? (state - 1) : 0
            return nextState;
        case 'RESET_TIMER':
            return INITIAL_STATE;
    }
    return state;
}