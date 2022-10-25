import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
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

function App() {
  const [currentUser, setCurrentUser] = React.useState({ name: "", email: "" });
  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="App">

      <Switch>

        <Route exact path="/">
          <Header loggedIn={false} />
          <Main />
          <Footer linkIsShow={false}/>
        </Route>

        <Route path="/movies">
          <Header loggedIn={true} />
          <Movies />
          <PopupInforming />
          <Footer linkIsShow={true}/>
        </Route>

        <Route path="/saved-movies">
          <Header loggedIn={true} />
          <SavedMovies />
          <Footer linkIsShow={true}/>
        </Route>

        <Route path="/profile">
          <Header loggedIn={true} />
          <Profile />
        </Route>

        <Route path="/signup">
          <Register />
        </Route>

        <Route path="/signin">
          <Login />
        </Route>

        <Route path="*">
          <PageNotFound />
        </Route>

      </Switch>

    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
