import { SHORT_FILM_DURATION } from "./config";

const filteredMoviesByDuration = (array) => {
  return array.filter((item) => item.duration <= SHORT_FILM_DURATION)
}

const filteredMoviesByKeyWord = (array, keyWord) => {
  return array.filter((item) => {
    return item.nameRU.toLowerCase().includes(keyWord.toLowerCase())
  });
}

export {
  filteredMoviesByDuration,
  filteredMoviesByKeyWord,
};