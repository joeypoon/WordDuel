import "../userAgent";
import io from 'socket.io-client';
import { rootUrl } from './constants';

export const socket = io(rootUrl, { jsonp: false });