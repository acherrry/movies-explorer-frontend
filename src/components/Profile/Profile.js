import React from "react";
import "./Profile.css";
import validation from "../../utils/useValidation";

function Profile() {
  const initialRegisterData = {
    name: "",
    email: "",
  }

  const { values, handleChange, errors, isValid } = validation(initialRegisterData);

  function handleInputChange(e) {
    handleChange(e);
  }

  return (
    <section className="profile">
      <form 
        className="profile__form"
      >
        <h2 className="profile__title">
          Привет, Алёна!
        </h2>
        <div className="profile__fields">
          <div className="profile__field">
            <p className="profile__text">
              Имя
            </p>
            <input 
              className={`profile__input ${
                errors.name 
                  ? "profile__input_error"
                  : "profile__input"
              }`}
              id="name"
              placeholder="Укажите имя"
              name="name"
              type="text"
              pattern="^[A-Za-zА-Яа-я-\s]+$"
              minLength="2"
              maxLength="30"
              value={values.name}
              autoComplete="off"
              onChange={handleInputChange}
              required
            >
            </input>
            <span className={`profile__error ${
              errors.name
              ? "profile__error_visible"
              : "profile__error"
            }`}>
              {errors.name}
            </span>
          </div>
          <div className="profile__field">
            <p className="profile__text">
            E-mail
            </p>
            <input 
              className={`profile__input ${
                errors.name 
                  ? "profile__input_error"
                  : "profile__input"
              }`}
              id="email"
              placeholder="Укажите e-mail"
              name="email"
              type="email"
              value={values.email}
              autoComplete="off"
              onChange={handleInputChange}
              required
            >
            </input>
            <span className={`profile__error ${
              errors.email
              ? "profile__error_visible"
              : "profile__error"
            }`}>
              {errors.email}
            </span>
          </div>
        </div>
        <button 
          type="submit"
          className={`profile__btn ${
            isValid
              ? "profile__btn"
              : "profile__btn_disabled"
          }`}
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