import "../userAgent";
import io from 'socket.io-client/socket.io';
import { rootUrl, events } from './constants';

export let socket = connect();

function connect() {
    let s = io(rootUrl, { jsonp: false })
    s.emit(events.players.login, { socket: s.id });
    return s;
}