import { combineReducers } from 'redux';

import {
    player,
    opponent,
    match,
    game,
    challenge
} from './reducers';

export default combineReducers({
    player,
    opponent,
    match,
    game,
    challenge
});
