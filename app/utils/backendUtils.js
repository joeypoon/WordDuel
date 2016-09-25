import { postPlayersUrl } from '../constants/urls';

export function postPlayers (body) {
    fetch(postPlayersUrl, { method: 'POST', body: JSON.stringify(body) });
}