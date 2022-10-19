import React from "react";
import "./AboutMe.css";
import avatar from "../../images/about-me/__avatar/avatar.jpg";
import MainTitle from "../MainTitle/MainTitle";
import MainSpecification from "../MainSpecification/MainSpecification";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <MainSpecification text="Студент" />
      <div className="about-me__container">
        <div className="about-me__text">
          <MainTitle position={'about-me'} text="Алёна" />
          <p className="about-me__job">
            Фронтенд-разработчик, 26 лет
          </p>
          <p className="about-me__description">
            Я живу в Кирове. Закончила факультет экономики ВятГСХА. Люблю животных. Долгое время работала тренером
            по технической поддержке в контактном центре - обучала сотрудников.
            Сейчас я поставила перед собой цель найти работу фронтенд-разработчиком. Веб-разработке я училась в Яндекс.Практикуме.
          </p>
          <ul className="about-me__social-network">
            <li>
              <a className="about-me__link" href="https://www.facebook.com" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a className="about-me__link" href="https://github.com/acherrry" target="_blank" rel="noreferrer">
                Github
              </a>
            </li>
          </ul>
        </div>
        <img className="about-me__avatar" alt="Фото создателя сайта" src={avatar} />
      </div>
    </section>
  )
}

export default AboutMe;