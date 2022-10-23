import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies }) {

  const [windowWidth, setWindowWidth] = React.useState(0);
  const [limitedMovies, setLimitedMovies] = React.useState([]);

  function resizeWindowWidth() {
    setWindowWidth(window.innerWidth)
  };

  React.useEffect(() => {
    resizeWindowWidth();
    window.addEventListener('resize', resizeWindowWidth);
    return () => window.removeEventListener('resize', resizeWindowWidth);
  }, []);

  React.useEffect(() => {
    let limitedCards;
    if (windowWidth > 1024) {
      limitedCards = 12
    } else if (windowWidth > 620) {
      limitedCards = 8
    } else {
      limitedCards = 5
    };
    if (movies.length > limitedCards) {
      setLimitedMovies(movies.slice(0, limitedCards))
    } else {
      setLimitedMovies(movies)
    }
  }, [windowWidth, movies]);

  const cardsElements = limitedMovies.map(item =>
    <li key={item._id}>
      <MoviesCard
        card={item}
      />
    </li>
    );

  return (
    <section className="cards">
      {limitedMovies.length > 0
      ? <ul className="cards__list">
          {cardsElements}
        </ul>
      : <div className="cards__not-found">
          По Вашему запросу ничего не найдено!
      </div>}

      {limitedMovies.length < movies.length
        ? <button
            className="cards__btn-add"
            type="button">
              Ещё
          </button>
        : ''}

    </section>
  )
}

export default MoviesCardList;