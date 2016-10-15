// Colors
export const mainTextColor = '#2c3e50';
export const mainColor = '#16a085';
export const secondaryColor = '#e74c3c';

// Urls
export const rootUrl = 'http://localhost:3000';
export const playersUrl = `${ rootUrl }/players`;

export const modalTypes = {
    invalidWord: 'invalidWord',
    roundOverSolo: 'roundOverSolo',
    roundOverDuel: 'roundOverDuel'
};

// Events
export const events = {
    root: {
        connect: 'connect'
    },
    words: {
        validate: 'validateWord'
    }
};