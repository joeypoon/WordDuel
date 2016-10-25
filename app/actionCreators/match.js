import { events, actionTypes } from '../constants';

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

export function updateActiveGrid(position, active) {
    return {
        type: actionTypes.updateActiveGrid,
        position,
        active
    };
}

export function resetActiveGrid() {
    return {
        type: actionTypes.resetActiveGrid
    };
}

export function loadLetterGrid(grid) {
    return {
        type: actionTypes.loadLetterGrid,
        grid
    };
}

export function requestLetterGrid() {
    return {
        type: actionTypes.requestLetterGrid,
        meta: {
            event: events.matches.grid.new
        }
    };
}

export function validateWord(word) {
    return {
        type: actionTypes.validateWord,
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
        type: actionTypes.submitWord,
        meta: {
            event: events.words.submit,
            eventParams: {
                matchId,
                word
            }
        }
    };
}

export function endMatch(matchId) {
    return {
        type: actionTypes.endMatch,
        meta: {
            event: events.matches.end,
            eventParams: {
                matchId
            }
        }
    };
}