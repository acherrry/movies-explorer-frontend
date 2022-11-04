import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import PopupInforming from "../PopupInforming/PopupInforming";
import * as MainApi from "../../utils/MainApi";

function App() {
  const [currentUser, setCurrentUser] = React.useState({name: "", email: ""});
  const [loggedIn, setLoggedIn] = React.useState(localStorage.getItem('loggedIn'));
  const [loginError, setLoginError] = React.useState("");
  const [registerError, setRegisterError] = React.useState("");
  const [isMoviesSaveError, setIsMoviesSaveError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isInfoTooltip, setIsInfoTooltip] = React.useState(false);
  const [tooltipText, setTooltipText] = React.useState("");
  const [savedMovies, setSavedMovies] = React.useState([]);

  const history = useHistory();

  React.useEffect(() => {
      MainApi.getUserInfo()
      .then((user) => {
        localStorage.setItem('loggedIn', true);
        setLoggedIn(true);
        setCurrentUser({name: user.name, email: user.email});
      })
      .catch((err) => {
        localStorage.removeItem('loggedIn');
        console.log(err.message);
      });
  }, []);

  React.useEffect(() => {
    if(loggedIn) {
      MainApi.getSavedMovies()
      .then((res) => {
        setSavedMovies(res);
      })
      .catch((err) => {
        console.log(err);
        setIsMoviesSaveError(true);
      })
    }
  }, [loggedIn]);

  const onLogin = ({ email, password }) => {
    setIsLoading(true);
    MainApi.login({ email, password })
      .then((res) => {
        console.log(res);
        localStorage.setItem('loggedIn', true);
        setLoggedIn(true);
        history.push("/movies");
        setCurrentUser(res);
        setLoginError("");
      })
      .catch((err) => {
        setLoginError(err.message);
        console.log(err.message);
      })
      .finally(() => setIsLoading(false));
  };

  const onRegister = ({ name, email, password }) => {
    setIsLoading(true);
    MainApi.register({ name, email, password })
      .then(() => {
        onLogin({ email, password });
        setRegisterError("");
      })
      .catch((err) => {
        setRegisterError(err.message);
        console.log(err.message);
      })
      .finally(() => setIsLoading(false));
  };

  const onSignOut = () => {
    MainApi.loginOut()
      .then(() => {
        setLoggedIn(false);
        localStorage.clear();
        history.push("/");
        setCurrentUser(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onUpdateUser = ({ name, email }) => {
    setIsLoading(true);
    setIsInfoTooltip(true);
    MainApi.editProfile({ name, email })
      .then((res) => {
        setCurrentUser(res);
        setTooltipText('Данные успешно обновлены!');
      })
      .catch((err) => {
        setTooltipText(err.message);
        console.log(err.message);
      })
      .finally(() => setIsLoading(false));
  }

  function handleAddMovieFavorites(movieObject) {
    MainApi.addMovieFavorites(movieObject)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
        })
      .catch((err) => {
        console.log(err.message);
      })
  }

  function handleDeleteMovieFavorites(movieId) {
    MainApi.deleteSavedMovie(movieId)
      .then((movie) => {
        setSavedMovies((previousValue) => {
          return previousValue.filter((d) => (d._id !== movie._id))
        })
        })
      .catch((err) => {
        console.log(err.message);
      })
  }

  function closePopupInforming() {
    setIsInfoTooltip(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="App">

      <Switch>

        <Route exact path="/">
          <Header loggedIn={loggedIn} />
          <Main />
          <Footer linkIsShow={false}/>
        </Route>

        <ProtectedRoute
          path="/movies"
          savedMovies={savedMovies}
          loggedIn={loggedIn} 
          component={Movies}
          handleAddMovieFavorites={handleAddMovieFavorites}
          handleDeleteMovieFavorites={handleDeleteMovieFavorites}
        />

        <ProtectedRoute 
          path="/saved-movies"
          savedMovies={savedMovies}
          loggedIn={loggedIn} 
          component={SavedMovies}
          isMoviesSaveError={isMoviesSaveError}
          handleDeleteMovieFavorites={handleDeleteMovieFavorites}
        />

        <ProtectedRoute
          path="/profile"
          loggedIn={loggedIn}
          component={Profile}
          onUpdateUser={onUpdateUser}
          onSignOut={onSignOut}
          isLoading={isLoading}
        />

        <Route path="/signup">
          <Register 
            onRegister={onRegister}
            registerError={registerError}
            setRegisterError={setRegisterError}
            isLoading={isLoading}
          />
        </Route>

        <Route path="/signin">
          <Login 
            onLogin={onLogin}
            loginError={loginError}
            setLoginError={setLoginError}
            isLoading={isLoading}
          />
        </Route>

        <Route path="*">
          <PageNotFound />
        </Route>

      </Switch>

      <PopupInforming 
        tooltipText={tooltipText}
        isOpen={isInfoTooltip}
        onClose={closePopupInforming}
      />

    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
