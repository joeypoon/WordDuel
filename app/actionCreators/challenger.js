import { actionTypes } from '../constants';
import { events } from '../constants';

export function challengeFriend(friendFacebookId, player) {
    return {
        type: actionTypes.challengeFriend,
        meta: {
            event: events.players.challengeFriend,
            eventParams: {
                friendFacebookId,
                player
            }
        }
    };
}

export function challengeResponse(facebookId, response, opponentSocket, matchId = null) {
    return {
        type: actionTypes.challengeResponse,
        meta: {
            event: events.players.challengeResponse,
            eventParams: {
                facebookId,
                response,
                opponentSocket,
                matchId
            }
        }
    };
}

export function clearChallenger() {
    return {
        type: actionTypes.clearChallenger
    };
}

export function setChallenger(params) {
    return {
        type: actionTypes.setChallenger,
        params
    }
}