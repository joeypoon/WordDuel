import { socket } from './socket';
import { events } from './constants';
import * as socketHandlers from './socketHandlers';

// root
socket.on(events.root.connect, () => console.log('Socket connected'));

// words
socket.on(events.words.validate, socketHandlers.onWordValidate);
socket.on(events.words.submit, socketHandlers.onWordSubmit);

// matches
socket.on(events.matches.grid.new, socketHandlers.onGridNew);
socket.on(events.matches.disconnect, socketHandlers.onMatchDisconnect);

// players
socket.on(events.players.found, socketHandlers.onPlayerFound);
socket.on(events.players.ready, socketHandlers.onPlayerReady);