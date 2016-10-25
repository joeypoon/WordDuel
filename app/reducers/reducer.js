import { combineReducers } from 'redux';

import letterGrid from './letter_grid_reducer';
import route from './route_reducer';
import modal from './modal_reducer';
import {
    player,
    opponent,
    match
} from './index';

export default combineReducers({
    letterGrid,
    route,
    modal,
    player,
    opponent,
    match
});
