// routes
export function setRoute (route) {
    return {
        type: 'SET_ROUTE',
        route
    };
}

// word display
export function addLetter (letter) {
    return {
        type: 'ADD_LETTER',
        letter
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

// active grid
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


// letter grid
export function loadLetterGrid () {
    return {
        type: 'LOAD_LETTER_GRID'
    };
}

// recent words
export function addToRecentWords (word) {
    return {
        type: 'ADD_TO_RECENT_WORDS',
        word
    };
}

export function clearRecentWords () {
    return {
        type: 'CLEAR_RECENT_WORDS'
    };
}

// opponent words
export function clearOpponentWords () {
    return {
        type: 'CLEAR_OPPONENT_WORDS'
    };
}

// timer
export function decrementTimer () {
    return {
        type: 'DECREMENT_TIMER'
    };
}

export function resetTimer () {
    return {
        type: 'RESET_TIMER'
    };
}

// score
export function setPlayerScore (score) {
    return {
        type: 'SET_PLAYER_SCORE',
        score
    };
}

export function setOpponentScore (score) {
    return {
        type: 'SET_OPPONENT_SCORE',
        score
    };
}