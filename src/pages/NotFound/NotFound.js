import React from "react";
import "./NotFound.css";

const NotFound = () => (
  <section id="not-found">
    <div className="hero is-fullheight is-primary is-info">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1">404</h1>
          <h1 className="title is-4">
            <i className="fa fa-ban" />
            The page your are looking for was not found
          </h1>
        </div>
      </div>
    </div>
  </section>
);

export default NotFound;
