import React from "react";
import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";

function SearchForm({ onSearchMovie, tumbler, handleFilterDuration }) {
  const [searchText, setSearchText] = React.useState("");
  const [searchError, setSearchError] = React.useState("");

  function handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    setSearchText(value);
    localStorage.setItem('searchText', value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchText === ""
      ? setSearchError('Нужно ввести ключевое слово')
      : onSearchMovie(searchText)
  }

  React.useEffect(() => {
    setSearchError("");
}, [searchText]);

  React.useEffect(() => {
    setSearchText(localStorage.getItem('searchText'));
  }, []);

  return (
    <section className="search-form">
      <form 
        className="search-form__form" 
        onSubmit={handleSubmit} 
        noValidate
      >
        <div className="search-form__container">
          <div className="search-form__help-img"></div>
          <input
            className={`search-form__field ${
              searchError
              ? "search-form__field_error"
              : "search-form__field"
            }`}
            placeholder="Фильм"
            name="search"
            type="text"
            value={searchText}
            autoComplete="off"
            onChange={handleInputChange}
            required
          />
          <span className={`search-form__error ${
            searchError
              ? "search-form__error_visible"
              : "search-form__error"
            }`}>
            {searchError}
          </span>
          <button
            type="submit"
            className="search-form__btn-find"
          />
        </div>
        <div className="search-form__checkbox">
          <FilterCheckbox 
            tumbler={tumbler}
            handleFilterDuration={handleFilterDuration}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm;