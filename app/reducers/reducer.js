import {combineReducers} from 'redux';

import activeGrid from './active_grid_reducer';
import letterGrid from './letter_grid_reducer';
import route from './route_reducer';
import wordDisplay from './word_display_reducer';
import recentWords from './recent_words_reducer';
import opponentWords from './opponent_words_reducer';

export default combineReducers({
    activeGrid,
    letterGrid,
    route,
    wordDisplay,
    recentWords,
    opponentWords
});