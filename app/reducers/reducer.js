import { combineReducers } from 'redux';

import route from './route_reducer';
import modal from './modal_reducer';
import {
    player,
    opponent,
    match
} from './index';

export default combineReducers({
    route,
    modal,
    player,
    opponent,
    match
});
