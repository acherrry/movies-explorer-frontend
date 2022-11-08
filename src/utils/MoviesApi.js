import { MOVIES_API, HEADERS } from "./config";

export const checkResponse = (res) => {
  return res.ok
    ? res.json()
    : Promise.reject(`Ошибка: ${res.status}`);
}

export function getMovies() {
  return fetch(MOVIES_API, {
    method: 'GET',
    headers: HEADERS,
  })
  .then(checkResponse);
}