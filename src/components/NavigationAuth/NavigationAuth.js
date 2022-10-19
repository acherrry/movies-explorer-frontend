import React from "react";
import "./NavigationAuth.css";
import { Link } from "react-router-dom";

function NavigationAuthMenu() {
  return (
    <nav className="nav-auth">
      <ul className="nav-auth__list">
        <li className="nav-auth__item">
          <Link className="nav-auth__link" to="/signup">
            Регистрация
          </Link>
        </li>
        <li className="nav-auth__item">
          <Link className="nav-auth__link nav-auth__link_signin" to="/signin">
            Войти
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationAuthMenu;