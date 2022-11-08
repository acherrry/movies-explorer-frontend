import React from "react";
import './FilterCheckbox.css';

function FilterCheckbox({ tumbler, handleFilterDuration }) {
  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__label">
        <input 
          className="filter-checkbox__input"
          type="checkbox"
          name="checkbox"
          onChange={handleFilterDuration}
          checked={tumbler}
        />
        <span className="filter-checkbox__style"/>
        <span className={`filter-checkbox__text ${
          tumbler
            ? "filter-checkbox__text"
            : "filter-checkbox__text_disabled"}`}>
          Короткометражки
        </span>
      </label>
    </div>
  )
}

export default FilterCheckbox;