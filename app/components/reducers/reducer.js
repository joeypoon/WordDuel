import {combineReducers} from 'redux';

import activeGrid from '../reducers/active_grid_reducer';
import letterGrid from '../reducers/letter_grid_reducer';
import route from '../reducers/route_reducer';
import wordDisplay from '../reducers/word_display_reducer';
import recentWords from '../reducers/recent_words_reducer';

export default combineReducers({
    activeGrid,
    letterGrid,
    route,
    wordDisplay,
    recentWords
});