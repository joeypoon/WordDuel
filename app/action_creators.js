// routes
export function setRoute (route) {
    return {
        type: 'SET_ROUTE',
        route
    };
}

// players
export function setPlayerId (id) {
    return {
        type: 'SET_PLAYER_ID',
        id
    }
}

export function setPlayerToken (token) {
    return {
        type: 'SET_PLAYER_TOKEN',
        token
    };
}

export function setPlayerName (name) {
    return {
        type: 'SET_PLAYER_NAME',
        name
    };
}

export function setPlayerLevel (level) {
    return {
        type: 'SET_PLAYER_LEVEL',
        level
    };
}

export function setPlayerImage (image) {
    return {
        type: 'SET_PLAYER_IMAGE',
        image
    };
}

export function setOpponentName (name) {
    return {
        type: 'SET_OPPONENT_NAME',
        name
    };
}

export function setOpponentLevel (level) {
    return {
        type: 'SET_OPPONENT_LEVEL',
        level
    };
}

export function setOpponentImage (image) {
    return {
        type: 'SET_OPPONENT_IMAGE',
        image
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

export function setTimerPause (isPaused) {
    return {
        type: 'SET_TIMER_PAUSE',
        isPaused
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

// modal
export function setModalVisible (isVisible) {
    return {
        type: 'SET_MODAL_VISIBLE',
        isVisible
    };
}

export function setModalType (modalType) {
    return {
        type: 'SET_MODAL_TYPE',
        modalType
    };
}