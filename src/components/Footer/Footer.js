import React from "react";
import { useLocation } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const location = useLocation();
  return (
    <footer className="footer">
      <p className="footer__text">
      Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <p className="footer__copyright">
        &copy; {new Date().getFullYear()}
        </p>
        <nav className="footer__navigation">
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <a className="footer__link" href="https://practicum.yandex.ru/profile/web/" target="_blank" rel="noreferrer">
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__nav-item">
              <a className="footer__link" href="https://github.com/acherrry" target="_blank" rel="noreferrer">
                Github
              </a>
            </li>
            <li className={`footer__nav-item ${
              (location.pathname !== "/")
                ? "footer__nav-item"
                : "footer__nav-item_hidden"
              }`}>
              <a className="footer__link" href="https://www.facebook.com" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer;