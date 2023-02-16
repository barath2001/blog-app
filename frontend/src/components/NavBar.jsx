import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

import logo from "../assets/logo.png";

const navLinkClassName = ({ isActive }) =>
  isActive ? "navbar__link navbar__link_active" : "navbar__link";

const NavBar = () => {
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
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
