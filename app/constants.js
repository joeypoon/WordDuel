import constants from 'WordDuelConstants';

// Colors
export const mainTextColor = '#2c3e50';
export const mainColor = '#16a085';
export const secondaryColor = '#e74c3c';

// Urls
export const rootUrl = 'http://10.0.1.6:9004';
export const playersUrl = `${ rootUrl }/players`;

export const maxRounds = 1;

export const modalTypes = {
    waiting: 'waiting',
    invalidWord: 'invalidWord',
    roundOverSolo: 'roundOverSolo',
    roundOverDuel: 'roundOverDuel',
    opponentFound: 'opponentFound',
    gameOver: 'gameOver',
    submittingWord: 'submittingWord'
};

// Events
export const events = constants.events;
