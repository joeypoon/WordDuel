export function setRoute (route) {
    return {
        type: 'SET_ROUTE',
        route
    };
}

export function addLetter (letter) {
    return {
        type: 'ADD_LETTER',
        letter
    };
}

export function updateActiveGrid (position, active) {
    return {
        type: 'UPDATE_ACTIVE_GRID',
        position,
        active
    };
}

export function resetActiveGrid () {
    return {
        type: 'RESET_ACTIVE_GRID'
    };
}

export function clearWord () {
    return {
        type: 'CLEAR_WORD'
    };
}

export function submitWord () {
    return {
        type: 'SUBMIT_WORD'
    };
}

export function loadLetterGrid () {
    return {
        type: 'LOAD_LETTER_GRID'
    };
}