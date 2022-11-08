import { MAIN_API, HEADERS } from "./config";

export const checkResponse = (res) => {
  return res.ok
    ? res.json()
    : res.json().then((err)=> Promise.reject(err));
}

export const register = ({email, password, name}) => {
  return fetch(`${MAIN_API}/signup`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({
      email,
      password,
      name,
    })
  })
  .then(checkResponse);
};

export const login = ({email, password}) => {
  return fetch(`${MAIN_API}/signin`, {
    credentials: 'include',
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({
      email,
      password,
    })
  })
  .then(checkResponse);
};

export const loginOut = (res) => {
  return fetch(`${MAIN_API}/signout`, {
    credentials: 'include',
    method: 'DELETE',
    headers: HEADERS
  })
  .then(res)
  .catch(err => console.log(err))
};

export function getUserInfo() {
  return fetch(`${MAIN_API}/users/me`, {
    credentials: 'include',
    method: 'GET',
    headers: HEADERS
  })
  .then(checkResponse);
};

export function editProfile({ name, email }) {
  return fetch(`${MAIN_API}/users/me`, {
    credentials: 'include',
    method: 'PATCH',
    headers: HEADERS,
    body: JSON.stringify({
      name,
      email,
    })
  })
  .then(checkResponse);
};

export function addMovieFavorites(favoriteMovieObject) {
  return fetch(`${MAIN_API}/movies`, {
    credentials: 'include',
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({
      country: favoriteMovieObject.country,
      director: favoriteMovieObject.director,
      duration: favoriteMovieObject.duration,
      year: favoriteMovieObject.year,
      description: favoriteMovieObject.description,
      image: favoriteMovieObject.image,
      trailerLink: favoriteMovieObject.trailerLink,
      thumbnail: favoriteMovieObject.thumbnail,
      movieId: favoriteMovieObject.movieId,
      nameRU: favoriteMovieObject.nameRU,
      nameEN: favoriteMovieObject.nameEN,
    })
  })
  .then(checkResponse);
};

export function getSavedMovies() {
  return fetch(`${MAIN_API}/movies`, {
    credentials: 'include',
    method: 'GET',
    headers: HEADERS
  })
  .then(checkResponse);
};

export function deleteSavedMovie(movieId) {
  return fetch(`${MAIN_API}/movies/${movieId}`, {
    credentials: 'include',
    method: 'DELETE',
    headers: HEADERS
  })
  .then(checkResponse);
};