import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">
        Портфолио
      </h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/acherrry/how-to-learn" target="_blank" rel="noreferrer">
            <p className="portfolio__link-text">
              Статичный сайт
            </p>
            <p className="portfolio__link-text">
              ↗
            </p>
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/acherrry/russian-travel" target="_blank" rel="noreferrer">
            <p className="portfolio__link-text">
              Адаптивный сайт
            </p>
            <p className="portfolio__link-text">
              ↗
            </p>
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/acherrry/react-mesto-api-full" target="_blank" rel="noreferrer">
            <p className="portfolio__link-text">
              Одностраничное приложение
            </p>
            <p className="portfolio__link-text">
              ↗
            </p>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;