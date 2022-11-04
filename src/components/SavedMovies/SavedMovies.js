import React from "react";

import "./SavedMovies.css";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

import { filteredMoviesByDuration, filteredMoviesByKeyWord} from "../../utils/dataFiltering";

function SavedMovies({ loggedIn, savedMovies, isMoviesSaveError }) {
  const [foundMovies, setFoundMovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [isFilterDurationActive, setIsFilterDurationActive] = React.useState(false);

  function onSearchMovie(searchText) {
    setFoundMovies(filteredMoviesByKeyWord(savedMovies, searchText));
  };

  function handleFilterDuration() {
    setIsFilterDurationActive((prevState) => !prevState)
  };

  React.useEffect(() => {
    setFoundMovies(savedMovies)
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
        moviesPage={false}
      />
        : ''}

      <Footer />
    </section>
  )
}

export default SavedMovies;