import React from "react";
import "./NavTab.css";

function NavTab() {
  return (
    <nav className="navigation-project">
      <ul className="navigation-project__list">
        <li className="navigation-project__item">
          <a className="navigation-project__link" href="#about-project">
            О проекте
          </a>
        </li>
        <li className="navigation-project__item">
          <a className="navigation-project__link" href="#techs">
            Технологии
          </a>
        </li>
        <li className="navigation-project__item">
          <a className="navigation-project__link" href="#about-me">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavTab;