import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <section className="profile">
      <form className="profile__form">
        <h2 className="profile__title">
          Привет, Алёна!
        </h2>
        <div className="profile__fields">
          <div className="profile__field">
            <p className="profile__text">
              Имя
            </p>
            <input 
              className="profile__input"
              placeholder="Укажите имя"
              name="name"
              type="text"
              minLength="2"
              maxLength="30"
              required
              defaultValue="Алёна"
            >
            </input>
            <span className="profile__error">
              Что-то пошло не так...
            </span>
          </div>
          <div className="profile__field">
            <p className="profile__text">
            E-mail
            </p>
            <input 
              className="profile__input"
              placeholder="Укажите e-mail"
              name="email"
              type="email"
              required
              defaultValue="pochta@yandex.ru"
            >
            </input>
            <span className="profile__error">
              Что-то пошло не так...
            </span>
          </div>
        </div>
        <button 
          type="submit"
          className="profile__btn"
        >
          Редактировать
        </button>
        <button 
          type="button"
          className="profile__btn profile__btn_logout"
        >
          Выйти из аккаунта
        </button>
      </form>
    </section>
  )
}

export default Profile;