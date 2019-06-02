import React from "react";
import { Link } from "react-router-dom";
import "./TopNav.css";

const TopNav = () => (
  <header className="container" id="top-nav">
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <span className="title is-5 first-name">Olivier </span>
          <span className="title is-5 last-name"> Esuka</span>
        </Link>

        <button
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/resume" className="navbar-item">
            Resume
          </Link>
          <Link to="/contact" className="navbar-item">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  </header>
);

export default TopNav;
