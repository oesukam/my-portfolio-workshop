import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => (
  <section id="not-found">
    <div className="hero is-fullheight is-primary is-info">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1">
            4<i className="fa fa-ban" />4
          </h1>
          <h1 className="title is-4">
            The page your are looking for was not found
          </h1>

          <Link to="/" className="button">
            To Home
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default NotFound;
