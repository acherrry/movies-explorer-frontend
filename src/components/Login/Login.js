import React from "react";
import SignContainer from "../SignContainer/SignContainer";
import "../SignContainer/SignContainer.css";
import useValidation from "../../utils/useValidation";

function Login({ onLogin, isLoading, loginError, setLoginError }) {
  const loginData = {
    email: "",
    password: "",
  }

  const { values, handleChange, errors, isValid, resetForm } = useValidation(loginData);

  function handleInputChange(e) {
    handleChange(e);
    setLoginError("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    onLogin({ email: values.email, password: values.password });
  }

  return (
    <SignContainer header="Рады видеть!"
      submit="Войти"
      text="Ещё не зарегистрированы?"
      link="Регистрация"
      path="/signup"
      isValid={isValid}
      resetForm={resetForm}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      error={loginError}
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
          pattern='^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
          value={values.email}
          disabled={isLoading}
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
          disabled={isLoading}
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