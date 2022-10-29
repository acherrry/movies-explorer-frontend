import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

import { movies } from '../../utils/movies.js';

function Movies({ loggedIn }) {
  return (
  <section className="movies">
    <Header loggedIn={loggedIn}/>
    <SearchForm />
    <MoviesCardList
      movies={movies}
    />
    <Footer />
  </section>
  )
}

export default Movies;