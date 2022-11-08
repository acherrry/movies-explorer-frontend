import React from "react";
import { useHistory } from "react-router-dom";
import "./PageNotFound.css";


function PageNotFound() {

  const history = useHistory();

  return (
    <div className="page-not-found">
      <div className="page-not-found__specification">
        <h1 className="page-not-found__title">
          404
        </h1>
        <p className="page-not-found__subtitle">
          Страница не найдена
        </p>
      </div>
      <button className="page-not-found__btn" onClick={() => history.go(-1)}>
        Назад
      </button>
    </div>
  )
}

export default PageNotFound;