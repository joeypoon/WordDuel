import { events, actionTypes } from '../constants';

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

export function searchOpponent(facebookId) {
    return {
        type: actionTypes.searchOpponent,
        meta: {
            event: events.players.search,
            eventParams: {
                facebookId
            }
        }
    }
}

export function clearWord() {
    return {
        type: actionTypes.clearWord
    };
}

export function cancelSearch(facebookId) {
    return {
        type: actionTypes.cancelSearch,
        meta: {
            event: events.players.cancel,
            eventParams: {
                facebookId
            }
        }
    };
}

export function sendReady(socket) {
    return {
        type: actionTypes.sendReady,
        meta: {
            event: events.players.ready,
            eventParams: {
                socket
            }
        }
    };
}

export function submitWord(socket, word) {
    return {
        type: actionTypes.submitWord,
        meta: {
            event: events.words.submit,
            eventParams: {
                socket,
                word
            }
        }
    };
}

export function submitScore(score) {
    return {
        type: actionTypes.submitScore,
        meta: {
            event: events.players.score,
            eventParams: {
                score
            }
        }
    };
}

export function timeout(opponentSocket) {
    return {
        type: actionTypes.timeout,
        meta: {
            event: events.players.timeout,
            eventParams: {
                opponentSocket
            }
        }
    };
}

export function findActiveFriends(facebookIds) {
    return {
        type: actionTypes.findActiveFriends,
        meta: {
            event: events.players.findActiveFriends,
            eventParams: {
                facebookIds
            }
        }
    }
}

export function setFriends(friends) {
    return {
        type: actionTypes.setFriends,
        friends
    };
}

export function challengeFriend(friendFacebookId) {
    return {
        type: actionTypes.challengeFriend,
        meta: {
            event: events.players.challengeFriend,
            eventParams: {
                friendFacebookId
            }
        }
    }
}