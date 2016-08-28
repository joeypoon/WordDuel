export function setRoute(route) {
    return {
        type: 'SET_ROUTE',
        route
    };
}

export function addLetter(letter) {
    return {
        type: 'ADD_LETTER',
        letter
    };
}

export function clearWord() {
    return {
        type: 'CLEAR_WORD'
    };
}

export function submitWord() {
    return {
        type: 'SUBMIT_WORD'
    }
}