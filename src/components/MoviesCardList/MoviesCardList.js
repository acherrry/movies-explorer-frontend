import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";

import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, savedMovies, handleAddMovieFavorites, handleDeleteMovieFavorites, moviesPage }) {
  const location = useLocation();

  const cardsElements = movies.map(item =>
    <li className="cards__item" key={item._id || item.id}>
      <MoviesCard
        card={item}
        moviesPage={moviesPage}
        savedMovies={savedMovies}
        handleAddMovieFavorites={handleAddMovieFavorites}
        handleDeleteMovieFavorites={handleDeleteMovieFavorites}
      />
    </li>
    );
    
  return (
    <section className="cards">
      <ul className={`cards__list ${
        (location.pathname !== "/saved-movies")
          ? "cards__list" 
          : "cards__list_saved"
      }`}>
          {cardsElements}
        </ul>
    </section>
  )
}

export default MoviesCardList;