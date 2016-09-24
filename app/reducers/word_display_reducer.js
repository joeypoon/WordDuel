const INITIAL_STATE = '';

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_LETTER':
            return (state + action.letter);
        case 'CLEAR_WORD':
            return '';
        case 'SUBMIT_WORD':
            // TODO submit to backend then clear after response
            return state;
    }
    return state;
}