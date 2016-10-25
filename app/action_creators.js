import { events, modalTypes, actionTypes } from './constants';

// routes
export function setRoute(route) {
    return {
        type: 'SET_ROUTE',
        route
    };
}

// players
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

// player
export function setPlayer(params) {
    return {
        type: actionTypes.setPlayer,
        params
    };
}

export function clearPlayer() {
    return {
        type: actionTypes.clearPlayer
    };
}

// opponent
export function setOpponent(params) {
    return {
        type: actionTypes.setOpponent,
        params
    };
}

export function clearOpponent() {
    return {
        type: actionTypes.clearOpponent
    };
}

export function setReady(matchId) {
    return {
        type: 'SET_READY',
        meta: {
            event: events.players.ready,
            eventParams: {
                matchId
            }
        }
    };
}

// match
export function setMatchId(matchId) {
    return {
        type: actionTypes.setMatchId,
        matchId
    };
}

export function incrementRound() {
    return {
        type: actionTypes.incrementRound
    };
}

export function clearMatch() {
    return {
        type: actionTypes.clearMatch
    };
}

export function resetRound() {
    return {
        type: actionTypes.resetRound
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

export function decrementTimer() {
    return {
        type: actionTypes.decrementTimer
    };
}

export function setTimerPause(isPaused) {
    return {
        type: actionTypes.setTimerPause,
        isPaused
    };
}

// word display
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
export function resetTimer() {
    return {
        type: 'RESET_TIMER'
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

export function setModalType(modalType) {
    return {
        type: 'SET_MODAL_TYPE',
        modalType
    }
}
