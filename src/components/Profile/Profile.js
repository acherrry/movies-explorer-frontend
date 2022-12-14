import React from "react";
import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useValidation from "../../utils/useValidation";

function Profile({ onUpdateUser, onSignOut, isLoading }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [isBtnEditDisabled, setIsBtnEditDisabled] = React.useState(false);

  const initialProfileData = {
    name: currentUser.name,
    email: currentUser.email,
  };

  const { values, handleChange, errors, isValid } = useValidation(initialProfileData);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({ name: values.name, email: values.email });
  }

  React.useEffect(() => {
    setIsBtnEditDisabled(!isValid || isLoading || values.name === currentUser.name || values.email === currentUser.email)
}, [isLoading, isValid, currentUser, values]);

  return (
    <section className="profile">
      <form 
        className="profile__form"
        onSubmit={handleSubmit}
      >
        <h2 className="profile__title">
          Привет, {currentUser.name}!
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
              id="profile-name"
              placeholder="Укажите имя"
              name="name"
              type="text"
              pattern="^[A-Za-zА-Яа-я-\s]+$"
              minLength="2"
              maxLength="30"
              value={values.name}
              disabled={isLoading}
              autoComplete="off"
              onChange={handleChange}
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
                errors.email 
                  ? "profile__input_error"
                  : "profile__input"
              }`}
              id="profile-email"
              placeholder="Укажите e-mail"
              name="email"
              type="email"
              pattern='^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
              value={values.email}
              disabled={isLoading}
              autoComplete="off"
              onChange={handleChange}
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
        className={`profile__btn ${
          isBtnEditDisabled
            ? "profile__btn_disabled"
            : "profile__btn"
        }`}
          type="submit"
          disabled={isBtnEditDisabled || isLoading}
        >
          Редактировать
        </button>
        <button 
          type="button"
          className="profile__btn profile__btn_logout"
          onClick={onSignOut}
          disabled={isLoading}
        >
          Выйти из аккаунта
        </button>
      </form>
    </section>
  )
}

export default Profile;