import React from "react";
import SignContainer from "../SignContainer/SignContainer";
import "../SignContainer/SignContainer.css";

function Register() {
  return (
    <SignContainer header="Добро пожаловать!"
      submit="Зарегистрироваться"
      text="Уже зарегистрированы?"
      link="Войти"
      path="/signin"
    >
      <label className="sign-container__item">
        <p className="sign-container__text">
          Имя
        </p>
        <input
          className="sign-container__field"
          placeholder="Укажите имя"
          name="name"
          type="text"
          minLength="2"
          maxLength="30"
          required
          defaultValue="Алёна"
        />
        <span className="sign-container__error">
          Что-то пошло не так...
        </span>
      </label>
      <label className="sign-container__item">
        <p className="sign-container__text">
          E-mail
        </p>
        <input
          className="sign-container__field"
          placeholder="Укажите e-mail"
          name="email"
          type="email"
          required
          defaultValue="pochta@yandex.ru"
        />
        <span className="sign-container__error">
          Что-то пошло не так...
        </span>
      </label>
      <label className="sign-container__item">
        <p className="sign-container__text">
          Пароль
        </p>
        <input
          className="sign-container__field sign-container__field_error"
          placeholder="Укажите пароль"
          name="password"
          type="password"
          required
          defaultValue="••••••••••••••"
        />
        <span className="sign-container__error sign-container__error_visible">
          Что-то пошло не так...
        </span>
      </label>
    </SignContainer>
  )
}

export default Register;