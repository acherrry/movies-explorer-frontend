const REG_EXP_USER_NAME = /[A-Za-zА-Яа-я-\s]+$/;
const REG_EXP_URL = /(https?:\/\/)(www)?([a-z\d.-]+)\.([a-z.])([a-z\d-._~:/?#[\]@!$&'()*+,;=]*)(#)?$/i;

const MAIN_API = 'https://api.movies-chernyadeva.nomoredomains.icu';
const MOVIES_API = 'https://api.nomoreparties.co/beatfilm-movies';

const HEADERS = {
  'Content-Type': 'application/json'
};

const SHORT_FILM_DURATION = 40;

export {
  REG_EXP_USER_NAME,
  REG_EXP_URL,
  MAIN_API,
  MOVIES_API,
  HEADERS,
  SHORT_FILM_DURATION,
};