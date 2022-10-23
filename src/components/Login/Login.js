import React from "react";
import SignContainer from "../SignContainer/SignContainer";
import "../SignContainer/SignContainer.css";

function Login() {
  return (
    <SignContainer header="Рады видеть!"
      submit="Войти"
      text="Ещё не зарегистрированы?"
      link="Регистрация"
      path="/signup"
    >
      <label className="sign-container__item">
        <p className="sign-container__text">
          E-mail
        </p>
        <input
          className="sign-container__field"
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
          className="sign-container__field"
          name="password"
          type="password"
          required
        />
        <span className="sign-container__error">
          Что-то пошло не так...
        </span>
      </label>
    </SignContainer>
  )
}

export default Login;