import React from "react";
import SignContainer from "../SignContainer/SignContainer";
import "../SignContainer/SignContainer.css";
import useValidation from "../../utils/useValidation";

function Register({ onRegister, isLoading, registerError, setRegisterError }) {
  const registerData = {
    name: "",
    email: "",
    password: "",
  }

  const { values, handleChange, errors, isValid, resetForm } = useValidation(registerData);

  function handleInputChange(e) {
    handleChange(e);
    setRegisterError("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    onRegister({ email: values.email, password: values.password, name: values.name });
  }

  return (
    <SignContainer
      name="register"
      header="Добро пожаловать!"
      submit="Зарегистрироваться"
      text="Уже зарегистрированы?"
      link="Войти"
      path="/signin"
      isValid={isValid}
      resetForm={resetForm}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      error={registerError}
    >
      <label className="sign-container__item">
        <p className="sign-container__text">
          Имя
        </p>
        <input
          className={`sign-container__field ${
            errors.name 
              ? "sign-container__field_error"
              : "sign-container__field"
          }`}
          id="name"
          placeholder="Укажите имя"
          name="name"
          type="text"
          pattern="^[A-Za-zА-Яа-я-\s]+$"
          minLength="2"
          maxLength="30"
          value={values.name}
          disabled={isLoading}
          autoComplete="off"
          onChange={handleInputChange}
          required
        />
        <span className={`sign-container__error ${
          errors.name
            ? "sign-container__error_visible"
            : "ign-container__error"
        }`}>
          {errors.name}
        </span>
      </label>
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
          placeholder="Укажите e-mail"
          name="email"
          type="email"
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
          placeholder="Укажите пароль"
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

export default Register;