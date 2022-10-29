import React from "react";

import "./PopupInforming.css";

function PopupInforming({ isOpen, onClose, tooltipText }) {
  return (
    <div
      className={`popup ${
        isOpen
          ? "popup_is-opened"
          : "popup"
      }`}>
      <div className="popup__content">
        <button
          className="popup__close"
          type="button"
          onClick={onClose}
        />
        <p className="popup__text">
        {tooltipText}
        </p>
      </div>
    </div>
  )
}

export default PopupInforming;