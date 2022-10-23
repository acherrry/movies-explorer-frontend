import React from "react";
import "./AboutProject.css";
import MainSpecification from "../MainSpecification/MainSpecification";

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <MainSpecification text="О проекте" />
      <div className="about-project__info">
        <div className="about-project__description">
          <h3 className="about-project__description-title about-project__description-title_alignment">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__description-text">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__description">
          <h3 className="about-project__description-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__description-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__time-chronology">
        <div className="about-project__line">
          <h4 className="about-project__line-title">
            1 неделя
          </h4>
          <p className="about-project__line-text">
            Back-end
          </p>
        </div>
        <div className="about-project__line">
          <h4 className="about-project__line-title about-project__line-title_frontend">
            4 недели
          </h4>
          <p className="about-project__line-text about-project__line-text_frontend">
            Front-end
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;