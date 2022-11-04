const REG_EXP_USER_NAME = /[A-Za-zА-Яа-я-\s]+$/;
const REG_EXP_URL = /(https?:\/\/)(www)?([a-z\d.-]+)\.([a-z.])([a-z\d-._~:/?#[\]@!$&'()*+,;=]*)(#)?$/i;

const MAIN_API = 'https://api.movies-chernyadeva.nomoredomains.icu';
const MOVIES_API = 'https://api.nomoreparties.co/beatfilm-movies';

const HEADERS = {
  'Content-Type': 'application/json'
};

const SHORT_FILM_DURATION = 40;

const MAX_WIDTH_SCREEN = 1024;
const MEDIUM_WIDTH_SCREEN = 620;

const MAX_AMOUNT_CARDS = 12;
const MEDIUM_AMOUNT_CARDS = 8;
const MIN_AMOUNT_CARDS = 5;

const AMOUNT_CARDS_ADD_ON_SCREEN_MAX_WIDTH = 3;
const AMOUNT_CARDS_ADD_ON_SCREEN_MEDIUM_WIDTH = 2;

export {
  REG_EXP_USER_NAME,
  REG_EXP_URL,
  MAIN_API,
  MOVIES_API,
  HEADERS,
  SHORT_FILM_DURATION,
  MAX_WIDTH_SCREEN,
  MEDIUM_WIDTH_SCREEN,
  MAX_AMOUNT_CARDS,
  MEDIUM_AMOUNT_CARDS,
  MIN_AMOUNT_CARDS,
  AMOUNT_CARDS_ADD_ON_SCREEN_MAX_WIDTH,
  AMOUNT_CARDS_ADD_ON_SCREEN_MEDIUM_WIDTH,
};