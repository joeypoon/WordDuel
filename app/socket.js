import "../userAgent";
import io from 'socket.io-client/socket.io';
import { rootUrl } from './constants';

export let socket = io(rootUrl, { jsonp: false });

export function reconnect() {
    socket = io(rootUrl, { jsonp: false });
}