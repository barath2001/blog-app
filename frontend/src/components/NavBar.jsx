import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

import logo from "../assets/logo.png";
import ThemeContext from "../context/theme-context";

const navLinkClassName = ({ isActive }) =>
  isActive ? "navbar__link navbar__link_active" : "navbar__link";

const NavBar = () => {
  const themeCtx = useContext(ThemeContext);

  const themeChangeHandler = () => {
    themeCtx.toggleTheme();
  };

  const themeSwitchClassName =
    themeCtx.theme === "LIGHT"
      ? "navbar__switch navbar__switch_dark"
      : "navbar__switch ";

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/">
          <img src={logo} className="navbar__logo" />
        </Link>
        <ul className="navbar__list">
          <li>
            <NavLink to="/" className={navLinkClassName}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog/new" className={navLinkClassName}>
              Write
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkClassName}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/auth" className={navLinkClassName}>
              Login
            </NavLink>
          </li>
          <li>
            <button
              onClick={themeChangeHandler}
              className={themeSwitchClassName}
            >
              {themeCtx.theme === "LIGHT" ? "Dark mode" : "Light mode"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
