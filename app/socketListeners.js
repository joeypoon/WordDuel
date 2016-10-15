import { socket } from './socket';
import { events } from './constants';
import { socketHandlers } from './utils/socketHandlers';

// root
socket.on(events.root.connect, () => console.log('Socket connected'));

// words
socket.on(events.words.validate, socketHandlers.onValidateWord);