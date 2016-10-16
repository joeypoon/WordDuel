const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'];
const letters = alpha.map((letter, index) => {
    return { value: letter, position: index }
});


const INITIAL_STATE = [
    letters.splice(0, 5),
    letters.splice(0, 5),
    letters.splice(0, 5),
    letters.splice(0, 5)
];

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOAD_LETTER_GRID':
            return action.grid;
    }
    return state;
}