import React from "react";
import "./Navigation.css";
import { NavLink, Link } from "react-router-dom";

function NavigationMenu() {

  const [burgerMenuIsOpened, setBurgerMenuIsOpened] = React.useState(false);

  function handleBurgerButtonClick() {
    setBurgerMenuIsOpened(!burgerMenuIsOpened);
  }

  return (
    <nav className="navigation">
      <button
        className="navigation__menu-burger"
        type="button"
        aria-label="Открыть меню"
        onClick={handleBurgerButtonClick}
      />
      <div
        className={`navigation__container ${
          burgerMenuIsOpened 
            ? "navigation__container_opened" 
            : "navigation__container"
        }`}>
        <div className="navigation__menubar">
          <div className="navigation__list-container">
            <button
              className="navigation__menu-close"
              type="button"
              aria-label="Закрыть меню"
              onClick={handleBurgerButtonClick}
            />
            <ul className="navigation__list">
              <li className="navigation__item">
                <Link className="navigation__link navigation__link_main" to="/">
                  Главная
                </Link>
              </li>
              <li className="navigation__item">
                <NavLink className="navigation__link" activeClassName="navigation__link_active" to="/movies">
                  Фильмы
                </NavLink>
              </li>
              <li className="navigation__item">
                <NavLink className="navigation__link navigation__link_font-weight" activeClassName="navigation__link_active" to="/saved-movies">
                  Сохраненные фильмы
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink className="navigation__link navigation__link_profile"to="/profile">
            Аккаунт
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavigationMenu;