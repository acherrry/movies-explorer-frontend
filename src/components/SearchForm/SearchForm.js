import React from "react";
import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";

function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__form">
        <div className="search-form__container">
          <div className="search-form__help-img"></div>
          <input
            className="search-form__field"
            placeholder="Фильм"
            name="search"
            type="text"
          />
          <button
            type="submit"
            className="search-form__btn-find"
          />
        </div>
        <div className="search-form__checkbox">
        <FilterCheckbox />
        </div>
      </form>
    </section>
  )
}

export default SearchForm;