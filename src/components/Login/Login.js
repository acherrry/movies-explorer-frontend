import React from "react";
import SignContainer from "../SignContainer/SignContainer";
import "../SignContainer/SignContainer.css";
import validation from "../../utils/useValidation";

function Login() {
  const initialLoginData = {
    email: "",
    password: "",
  }

  const { values, handleChange, errors, isValid, resetForm } = validation(initialLoginData);

  function handleInputChange(e) {
    handleChange(e);
  }

  return (
    <SignContainer header="Рады видеть!"
      submit="Войти"
      text="Ещё не зарегистрированы?"
      link="Регистрация"
      path="/signup"
      isValid={isValid}
      resetForm={resetForm}
    >
      <label className="sign-container__item">
        <p className="sign-container__text">
          E-mail
        </p>
        <input
          className={`sign-container__field ${
            errors.email
              ? "sign-container__field_error"
              : "sign-container__field"
          }`}
          id="email"
          name="email"
          type="email"
          value={values.email}
          autoComplete="off"
          onChange={handleInputChange}
          required
        />
        <span className={`sign-container__error ${
          errors.email
            ? "sign-container__error_visible"
            : "ign-container__error"
        }`}>
          {errors.email}
        </span>
      </label>
      <label className="sign-container__item">
        <p className="sign-container__text">
          Пароль
        </p>
        <input
          className={`sign-container__field ${
            errors.password
              ? "sign-container__field_error"
              : "sign-container__field"
          }`}
          id="password"
          name="password"
          type="password"
          value={values.password}
          autoComplete="off"
          onChange={handleInputChange}
          required
        />
        <span className={`sign-container__error ${
          errors.password
            ? "sign-container__error_visible"
            : "ign-container__error"
        }`}>
          {errors.password}
        </span>
      </label>
    </SignContainer>
  )
}

export default Login;