import { events, modalTypes } from './constants';

// routes
export function setRoute(route) {
    return {
        type: 'SET_ROUTE',
        route
    };
}

// players
export function setFacebookId(id) {
    return {
        type: 'SET_FACEBOOK_ID',
        id
    }
}

export function setPlayerName(name) {
    return {
        type: 'SET_PLAYER_NAME',
        name
    };
}

export function setPlayerLevel(level) {
    return {
        type: 'SET_PLAYER_LEVEL',
        level
    };
}

export function setPlayerImage(image) {
    return {
        type: 'SET_PLAYER_IMAGE',
        image
    };
}

export function searchOpponent(facebookId) {
    return {
        type: 'SEARCH_OPPONENT',
        meta: {
            event: events.players.search,
            eventParams: {
                facebookId
            }
        }
    }
}

export function setOpponentName(name) {
    return {
        type: 'SET_OPPONENT_NAME',
        name
    };
}

export function setOpponentLevel(level) {
    return {
        type: 'SET_OPPONENT_LEVEL',
        level
    };
}

export function setOpponentImage(image) {
    return {
        type: 'SET_OPPONENT_IMAGE',
        image
    };
}

export function setOpponentWord(word) {
    return {
        type: 'SET_OPPONENT_WORD',
        word
    };
}

// matches
export function setMatchId(matchId) {
    return {
        type: 'SET_MATCH_ID',
        matchId
    };
}

export function incrementRound() {
    return {
        type: 'INCREMENT_ROUND'
    };
}

export function resetRound() {
    return {
        type: 'RESET_ROUND'
    };
}

export function cancelSearch(facebookId) {
    return {
        type: 'CANCEL_SEARCH',
        meta: {
            event: events.search.cancel,
            eventParams: {
                facebookId
            }
        }
    };
}

export function endMatch(matchId) {
    return {
        type: 'END_MATCH',
        meta: {
            event: events.matches.end,
            eventParams: {
                matchId
            }
        }
    };
}

// word display
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

export function validateWord(word) {
    return {
        type: 'SUBMIT_WORD',
        meta: {
            event: events.words.validate,
            eventParams: {
                word
            }
        }
    };
}

export function submitWord(matchId, word) {
    return {
        type: 'SUBMIT_WORD',
        meta: {
            event: events.words.submit,
            eventParams: {
                matchId,
                word
            }
        }
    };
}

// active grid
export function updateActiveGrid(position, active) {
    return {
        type: 'UPDATE_ACTIVE_GRID',
        position,
        active
    };
}

export function resetActiveGrid() {
    return {
        type: 'RESET_ACTIVE_GRID'
    };
}


// letter grid
export function requestLetterGrid() {
    return {
        type: 'REQUEST_LETTER_GRID',
        meta: {
            event: events.matches.grid.new
        }
    };
}

export function loadLetterGrid(grid) {
    return {
        type: 'LOAD_LETTER_GRID',
        grid
    };
}


// timer
export function decrementTimer() {
    return {
        type: 'DECREMENT_TIMER'
    };
}

export function resetTimer() {
    return {
        type: 'RESET_TIMER'
    };
}

export function setTimerPause(isPaused) {
    return {
        type: 'SET_TIMER_PAUSE',
        isPaused
    };
}

// score
export function setPlayerScore(score) {
    return {
        type: 'SET_PLAYER_SCORE',
        score
    };
}

export function setOpponentScore(score) {
    return {
        type: 'SET_OPPONENT_SCORE',
        score
    };
}

export function submitScore(score) {
    return {
        type: 'SUBMIT_SCORE',
        meta: {
            event: events.score.submit,
            eventParams: {
                score
            }
        }
    };
}

// modal
export function setModalVisible(isVisible) {
    return {
        type: 'SET_MODAL_VISIBLE',
        isVisible
    };
}

export function setModalType(modalType, params) {
    let action = {
        type: 'SET_MODAL_TYPE',
        modalType
    }
    if (modalType === modalTypes.waiting) {
        action.meta = {
            event: events.players.ready,
            eventParams: params
        };
    }
    return action;
}
