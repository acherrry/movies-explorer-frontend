import React from "react";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { favoritesMovies } from '../../utils/movies.js';

function SavedMovies({ loggedIn }) {
  return (
    <section className="saved-movies">
      <Header loggedIn={loggedIn}/>
      <SearchForm />
      <MoviesCardList
        movies={favoritesMovies}
      />
      <Footer />
    </section>
  )
}

export default SavedMovies;