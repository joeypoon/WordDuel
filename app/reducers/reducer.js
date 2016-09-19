import {combineReducers} from 'redux';

import activeGrid from './active_grid_reducer';
import letterGrid from './letter_grid_reducer';
import route from './route_reducer';
import wordDisplay from './word_display_reducer';
import timer from './timer_reducer';
import score from './score_reducer';
import modal from './modal_reducer';
import players from './players_reducer';

export default combineReducers({
    activeGrid,
    letterGrid,
    route,
    wordDisplay,
    timer,
    score,
    modal,
    players
});