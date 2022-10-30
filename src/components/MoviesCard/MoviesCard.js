import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
import { REG_EXP_URL } from "../../utils/config";
import { durationConversion } from "../../utils/durationСonversion";

function MoviesCard({ card }) {
  const { pathname } = useLocation();

  const [favorite, setFavorite] = React.useState(false);

  const trailerLink = REG_EXP_URL.test(card.trailerLink) 
    ? card.trailerLink
    : 'https://www.youtube.com';

  function handleFavoriteBtnClick() {
    setFavorite(!favorite);
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
          src={('https://api.nomoreparties.co/' + card.image.url)}
          alt={card.nameRU} 
          className="movie-card__image"
        >
        </img>
      </a>

      {pathname === '/saved-movies'
        ? <button 
            className="movie-card__btn movie-card__btn_delete"
            type="button"
        />

        : <button
            className={`movie-card__btn ${
              favorite 
                ? "movie-card__btn_favorites-active" 
                : "movie-card__btn"}`}
            type="button"
            aria-label="Добавить в избранное"
            onClick={handleFavoriteBtnClick}
          />}
    </div>
  )
}

export default MoviesCard;