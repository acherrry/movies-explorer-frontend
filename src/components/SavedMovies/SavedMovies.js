import React from "react";

import "./SavedMovies.css";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

import { filteredMoviesByDuration, filteredMoviesByKeyWord} from "../../utils/dataFiltering";

function SavedMovies({ loggedIn, savedMovies, isMoviesSaveError, handleDeleteMovieFavorites }) {
  const [foundMovies, setFoundMovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [isFilterDurationActive, setIsFilterDurationActive] = React.useState(false);

  function onSearchMovie(searchText) {
    setFoundMovies(filteredMoviesByKeyWord(savedMovies, searchText));
    localStorage.setItem('searchTextSavedMovie', searchText)
    isFilterDurationActive
      ? localStorage.setItem('filterDurationActiveSavedMovie', true)
      : localStorage.removeItem('filterDurationActiveSavedMovie')
  };

  function handleFilterDuration() {
    isFilterDurationActive
      ? localStorage.removeItem('filterDurationActiveSavedMovie')
      : localStorage.setItem('filterDurationActiveSavedMovie', true)
    setIsFilterDurationActive((prevState) => !prevState)
  };

  React.useEffect(() => {
    const tumbler = localStorage.getItem('filterDurationActiveSavedMovie');
    if (tumbler !== null) {
      setIsFilterDurationActive(true);
    }
  }, []);

  React.useEffect(() => {
    setFoundMovies(savedMovies.reverse())
  }, [savedMovies]);
  console.log(savedMovies);

  React.useEffect(() => {
    isFilterDurationActive
    ? setFilteredMovies(filteredMoviesByDuration(foundMovies))
    : setFilteredMovies(foundMovies);
  }, [isFilterDurationActive, foundMovies]);

  return (
    <section className="saved-movies">
      <Header loggedIn={loggedIn}/>

      <SearchForm 
        onSearchMovie={onSearchMovie}
        handleFilterDuration={handleFilterDuration}
        tumbler={isFilterDurationActive}
      />

      {isMoviesSaveError 
      ? <div className="movies__not-found">
          Во время запроса произошла ошибка. 
          Возможно, проблема с соединением, или сервер недоступен. 
          Подождите немного и попробуйте ещё раз.
        </div>
      : ''}

      {filteredMovies.length === 0 && !isMoviesSaveError
      ? <div className="movies__not-found">
          Ничего не найдено.
        </div>
        : ''}

      {filteredMovies.length > 0 && !isMoviesSaveError
      ? <MoviesCardList
        movies={filteredMovies}
        handleDeleteMovieFavorites={handleDeleteMovieFavorites}
      />
        : ''}

      <Footer />
    </section>
  )
}

export default SavedMovies;