import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import { movies } from '../../utils/movies.js';

function Movies() {
  return (
  <section className="movies">
    <SearchForm />
    <MoviesCardList
      movies={movies}
    />
  </section>
  )
}

export default Movies;