import { events, actionTypes } from '../constants';

export function setMatchId(matchId) {
    return {
        type: actionTypes.setMatchId,
        matchId
    };
}

export function clearMatch() {
    return {
        type: actionTypes.clearMatch
    };
}

export function newRound() {
    return {
        type: actionTypes.newRound
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

export function matchDisconnect(socket, matchId) {
    return {
        type: actionTypes.matchDisconnect,
        meta: {
            event: events.matches.disconnect,
            eventParams: {
                socket,
                matchId
            }
        }
    };
}

export function matchEnd(matchId) {
    return {
        type: actionTypes.matchEnd,
        meta: {
            event: events.matches.end,
            eventParams: {
                matchId
            }
        }
    };
}