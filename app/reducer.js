import { combineReducers } from 'redux';

import {
    player,
    opponent,
    match,
    game
} from './reducers';

export default combineReducers({
    player,
    opponent,
    match,
    game
});
