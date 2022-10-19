import React from "react";
import "./Promo.css";
import NavTab from "../NavTab/NavTab";
import MainTitle from "../MainTitle/MainTitle";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <MainTitle position={'promo'} text="Учебный проект студента факультета Веб-разработки." />
        <NavTab />
      </div>
    </section>
  )
}

export default Promo;