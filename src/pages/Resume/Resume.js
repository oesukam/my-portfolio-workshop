import React, { Component } from "react";

class Resume extends Component {
  componentDidMount() {
    console.log("Did mount");
  }

  fetchMyGitHubProfile() {}

  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="column is-6 is-offset-3">
            <h2 className="title is-2 has-text-centered">My Resume</h2>
            <hr />

            <div className="content">
              <h3 className="title is-4">Personal Details</h3>
              <hr />
              <ul>
                <li>
                  <span className="has-text-weight-bold">First Name:</span>
                  Olivier
                </li>
                <li>
                  <span className="has-text-weight-bold">Last Name:</span>Esuka
                </li>
                <li>
                  <span className="has-text-weight-bold">Email:</span>
                  oesukam@gmail.com
                </li>
              </ul>

              <h3 className="title is-4">Education</h3>
              <hr />
              <ul>
                <li>
                  <span className="has-text-weight-bold">1997 - 2003:</span>
                  Primary
                </li>
                <li>
                  <span className="has-text-weight-bold">2003 - 2010:</span>{" "}
                  Secondary
                </li>
                <li>
                  <span className="has-text-weight-bold">2011 - 2015:</span>{" "}
                  University
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
