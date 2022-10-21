import React from "react";

import "./PopupInforming.css";

function PopupInforming() {
  return (
    <div
      className="popup"
    >
      <div className="popup__content">
        <button
          className="popup__close"
          type="button"
        />
        <p className="popup__text">При выполнении запроса возникла ошибка авторизации</p>
      </div>
    </div>
  )
}

export default PopupInforming;