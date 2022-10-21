import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import { favoritesMovies } from '../../utils/movies.js';

function SavedMovies() {
  return (
  <section className="saved-movies">
    <SearchForm />
    <MoviesCardList
      movies={favoritesMovies}
    />
  </section>
  )
}

export default SavedMovies;