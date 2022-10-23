import React from "react";
import "./Techs.css";
import MainTitle from "../MainTitle/MainTitle";
import MainSpecification from "../MainSpecification/MainSpecification";

function Techs() {
  return (
    <section className="techs" id="techs">
      <MainSpecification position={'techs'} text="Технологии" />
      <div className="techs_container">
        <MainTitle position={'techs'} text="7 технологий" />
        <p className="techs__text">
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
        <ul className="techs__list">
          <li className="techs__item">
            HTML
          </li>
          <li className="techs__item">
            CSS
          </li>
          <li className="techs__item">
            JS
          </li>
          <li className="techs__item">
            React
          </li>
          <li className="techs__item">
            Git
          </li>
          <li className="techs__item">
            Express.js
          </li>
          <li className="techs__item">
            mongoDB
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Techs;