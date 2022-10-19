import React from "react";
import "./Header.css";
import NavigationAuth from "../NavigationAuth/NavigationAuth";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";

function Header( { loggedIn }) {
  return (
    <header className="header">
      <Logo />
      {loggedIn
        ? <Navigation />
        : <NavigationAuth />
      }
    </header>
  );
}

export default Header;