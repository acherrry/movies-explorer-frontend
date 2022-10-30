import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

import "./Movies.css";

import * as MoviesApi from "../../utils/MoviesApi";
import { filteredMoviesByDuration, filteredMoviesByKeyWord} from "../../utils/dataFiltering";

function Movies({ loggedIn }) {
  const [movies, setMovies] = React.useState([]);
  const [foundMovies, setFoundMovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [limitedMovies, setLimitedMovies] = React.useState([]);

  const [isFoundError, setIsFoundError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const [windowWidth, setWindowWidth] = React.useState(0);

  function onSearchMovie(searchText) {
    setIsLoading(true);
    if (movies.length === 0) {
      MoviesApi.getMovies()
      .then((allMoviesArray) => {
        setMovies(allMoviesArray);
        localStorage.setItem('movies', JSON.stringify(allMoviesArray));
        const filteredAllMoviesArray = filteredMoviesByKeyWord(allMoviesArray, searchText);
        setFoundMovies(filteredAllMoviesArray);
        localStorage.setItem('foundMovies', JSON.stringify(filteredAllMoviesArray));
      })
      .catch((err) => {
        console.log(err);
        setIsFoundError(true);
      })
      .finally(() => setIsLoading(false));
    }
  };

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
    if (foundMovies.length > limitedCards) {
      setLimitedMovies(foundMovies.slice(0, limitedCards))
    } else {
      setLimitedMovies(foundMovies)
    }
  }, [windowWidth, foundMovies]);

  return (
  <section className="movies">
    <Header loggedIn={loggedIn}/>
    <SearchForm onSearchMovie={onSearchMovie}/>
    {isFoundError 
      ? <div className="movies__not-found">
          Во время запроса произошла ошибка. 
          Возможно, проблема с соединением, или сервер недоступен. 
          Подождите немного и попробуйте ещё раз.
        </div>
      : ''}
    {foundMovies.length === 0
      ? <div className="movies__not-found">
          Ничего не найдено.
        </div>
        : ''}
    <MoviesCardList
      movies={limitedMovies}
    />
      {limitedMovies.length < movies.length
        ? <button
            className="movies__btn-add"
            type="button">
              Ещё
          </button>
        : ''}
    <Footer />
  </section>
  )
}

export default Movies;