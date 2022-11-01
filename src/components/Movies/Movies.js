import React from "react";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
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
  const [isFoundActive, setIsFoundActive] = React.useState(false);
  const [isFilterDurationActive, setIsFilterDurationActive] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(0);

  function onSearchMovie(searchText) {
    setIsLoading(true);
    setIsFoundActive(true);
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
    } else {
      const filteredFoundMoviesArray = filteredMoviesByKeyWord(movies, searchText);
      setFoundMovies(filteredFoundMoviesArray);
      localStorage.setItem('foundMovies', JSON.stringify(filteredFoundMoviesArray));
      setIsLoading(false);
      setIsFoundActive(false);
    }
    isFilterDurationActive
      ? localStorage.setItem('filterDurationActive', true)
      : localStorage.removeItem('filterDurationActive')
  };

  function handleFilterDuration() {
    isFilterDurationActive
      ? localStorage.removeItem('filterDurationActive')
      : localStorage.setItem('filterDurationActive', true)
      setIsFilterDurationActive((prevState) => !prevState)
  }

  React.useEffect(() => {
    isFilterDurationActive
    ? setFilteredMovies(filteredMoviesByDuration(foundMovies))
    : setFilteredMovies(foundMovies);
  }, [isFilterDurationActive, foundMovies]);

  React.useEffect(() => {
    setMovies(JSON.parse(localStorage.getItem('movies')));
    setFoundMovies(JSON.parse(localStorage.getItem('foundMovies')));
    const tumbler = localStorage.getItem('filterDurationActive');
    if (tumbler !== null) {
      setIsFilterDurationActive(true);
    }
  }, []);

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
    if (filteredMovies.length > limitedCards) {
      setLimitedMovies(filteredMovies.slice(0, limitedCards))
    } else {
      setLimitedMovies(filteredMovies)
    }
  }, [windowWidth, filteredMovies]);

  return (
  <section className="movies">
    <Header loggedIn={loggedIn}/>

    <SearchForm 
      onSearchMovie={onSearchMovie}
      handleFilterDuration={handleFilterDuration}
      tumbler={isFilterDurationActive}
    />

    {isLoading && <Preloader />}

    {isFoundError 
      ? <div className="movies__not-found">
          Во время запроса произошла ошибка. 
          Возможно, проблема с соединением, или сервер недоступен. 
          Подождите немного и попробуйте ещё раз.
        </div>
      : ''}

    {filteredMovies.length === 0 && !isLoading && !isFoundActive
      ? <div className="movies__not-found">
          Ничего не найдено.
        </div>
        : ''}
    
    {filteredMovies.length > 0 && !isLoading && !isFoundActive
      ? <MoviesCardList
          movies={limitedMovies}
        />
        : ''}

    {limitedMovies.length < filteredMovies.length
      ? <button
          className="movies__btn-add"
          type="button"
        >
          Ещё
        </button>
      : ''}

    <Footer />
  </section>
  )
}

export default Movies;