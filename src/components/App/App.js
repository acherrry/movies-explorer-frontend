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
  const [isLoading, setIsLoading] = React.useState(false);
  const [isInfoTooltip, setIsInfoTooltip] = React.useState(false);
  const [tooltipText, setTooltipText] = React.useState("");

  const history = useHistory();

  React.useEffect(() => {
      MainApi.getUserInfo()
      .then((user) => {
        localStorage.setItem('loggedIn', 'true');
        setCurrentUser(user);
        setLoggedIn(true);
      })
      .catch((err) => {
        localStorage.removeItem('loggedIn');
        console.log(err.message);
      });
  }, []);

  const onLogin = ({ email, password }) => {
    setIsLoading(true);
    MainApi.login({ email, password })
      .then((res) => {
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
        localStorage.removeItem('loggedIn');
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
        console.log(res);
        setTooltipText('Данные успешно обновлены!');
      })
      .catch((err) => {
        setTooltipText(err.message);
        console.log(err.message);
      })
      .finally(() => setIsLoading(false));
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
          loggedIn={loggedIn} 
          component={Movies}
        />

        <ProtectedRoute 
          path="/saved-movies" 
          loggedIn={loggedIn} 
          component={SavedMovies}
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
