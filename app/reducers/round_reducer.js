const INITIAL_STATE = 0;

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'RESET_ROUND':
            return 0;
        case 'INCREMENT_ROUND':
            return state + 1;
    }
    return state;
}