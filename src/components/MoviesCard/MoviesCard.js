import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
import { REG_EXP_URL } from "../../utils/config";
import { durationConversion } from "../../utils/durationСonversion";

function MoviesCard({ card, savedMovies, handleAddMovieFavorites, handleDeleteMovieFavorites, moviesPage }) {

  const { pathname } = useLocation();

  const [favoriteMovie, setFavoriteMovie] = React.useState(null);

  const trailerLink = REG_EXP_URL.test(card.trailerLink) 
  ? card.trailerLink
  : 'https://www.youtube.com';
  
  React.useEffect(() => {
    console.log(savedMovies);
    if (pathname !== '/saved-movies') {
      setFavoriteMovie(savedMovies.find((i) => (Number(i.movieId)) === card.id));
    }
}, [pathname, savedMovies, card.id]);

  function handleFavoriteBtnClick() {
    favoriteMovie
    ? handleDeleteMovieFavorites(favoriteMovie._id)
    : handleAddMovieFavorites({
      country: card.country,
      director: card.director,
      duration: card.duration,
      year: card.year,
      description: card.description,
      image: 'https://api.nomoreparties.co/' + card.image.url,
      trailerLink: card.trailerLink,
      thumbnail: 'https://api.nomoreparties.co/' + card.thumbnail,
      movieId: card.id,
      nameRU: card.nameRU,
      nameEN: card.nameEN,
    })
  }
  
  function deleteSavedMovie() {
    handleDeleteMovieFavorites(card._id);
  }

  return (
    <div className="movie-card">
      <a 
        className="movie-card__link" 
        href={trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <div className="movie-card__container">
          <div className="movie-card__info">
            <h2 className="movie-card__name">
              {card.nameRU}
            </h2>
            <p className="movie-card__duration">
              {durationConversion(card.duration)}
            </p>
          </div>
        </div>
        <img 
          src={pathname !== '/saved-movies'
            ? ('https://api.nomoreparties.co/' + card.image.url)
            : card.image}
          alt={card.nameRU} 
          className="movie-card__image"
        >
        </img>
      </a>

      {pathname === '/saved-movies'
        ? <button 
            className="movie-card__btn movie-card__btn_delete"
            type="button"
            aria-label="Удалить из избранного"
            onClick={deleteSavedMovie}
        />

        : <button
            className={`movie-card__btn ${
              favoriteMovie
                ? "movie-card__btn_favorites-active"
                : "movie-card__btn"
              }`}
            type="button"
            aria-label="Добавить в избранное"
            onClick={handleFavoriteBtnClick}
          />}
    </div>
  )
}

export default MoviesCard;