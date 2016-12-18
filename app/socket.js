import "../userAgent";
import io from 'socket.io-client/socket.io';
import { rootUrl } from './constants';

export const socket = io(rootUrl, { jsonp: false });