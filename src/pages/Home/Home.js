import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import profile from "../../images/profile.jpg";

const Home = () => (
  <div className="hero is-fullheight">
    <div className="hero-body">
      <div className="container is-fullheight">
        <div className="columns is-vcentered">
          <div className="column has-text-centered">
            <img src={profile} className="my-profile-image" alt="My profile" />
          </div>
          <div className="column">
            <h1 className="title is-1">I'M Olivier ESUKA</h1>
            <h1 className="title is-3 is-light">Software Engineer - 4 Years</h1>
            <hr />
            <p className="about-me">
              A full-stack developer who enjoys solving problems and building
              products.
            </p>
            <div className="columns">
              <div className="column ">
                <Link
                  to="/resume"
                  className="button is-info  is-large is-fullwidth"
                >
                  Resume
                </Link>
              </div>
              <div className="column ">
                <Link
                  to="/contact"
                  className="button is-light is-large is-fullwidth"
                >
                  Contact
                </Link>
              </div>
            </div>
            <p className="social-icons">
              <a
                className="social-icon"
                href="https://www.github.com/oesuka"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github" />
              </a>
              <a
                className="social-icon"
                href="https://twitter.com/oesukam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                className="social-icon"
                href="https://www.facebook.com/oesuka"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
