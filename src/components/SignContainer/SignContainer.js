import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "../SignContainer/SignContainer.css";

function SignContainer({ 
  header, 
  children,
  submit, 
  text, 
  path, 
  link, 
  isValid,
  isLoading,
  onSubmit,
  error
}) {
  return (
    <section className="sign-container">
      <div className="sign-container__content">
        <Logo />
        <h2 className="sign-container__title">
          {header}
        </h2>
        <form className="sign-container__form" onSubmit={onSubmit}>
          <div className="sign-container__items">
            {children}
          </div>
          <div className="sign-container__error-informing">
            {error}
          </div>
          <button
            disabled={!isValid || isLoading}
            type="submit"
            className={`sign-container__btn-submit ${
              isValid
                ? "sign-container__btn-submit"
                : "sign-container__btn-submit_disabled"
            }`}>
            {submit}
          </button>

        </form>
        
        <div className="sign-container__specify">
          <p className="sign-container__specify-text">
            {text}
          </p>
          <Link to={path} className="sign-container__link">
            {link}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SignContainer;