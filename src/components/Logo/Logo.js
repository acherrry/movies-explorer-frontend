import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo/__img/logo.svg";
import "./Logo.css";

function Logo() {
  return (
    <Link className="logo" to="/">
      <img className="logo__img" alt="Логотип сервиса Movies Explorer" src={logo} />
    </Link>
  );
}

export default Logo;