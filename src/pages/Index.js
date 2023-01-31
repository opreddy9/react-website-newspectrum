import React, { Fragment } from "react";
import { Link } from "react-router-dom";
function Index() {
  return (
    <Fragment>
      <div>
        <div className="indexbody">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand mr-5" to="/">
              AKOVA
            </Link>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active mr-4">
                <Link className="nav-link" to="/studenthome">
                  LOGIN
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/enterhome">
                  SIGNUP
                </Link>
              </li>
            </ul>
          </nav>
          <div className="container">
            <h1 className="h1 brand text-center">Akova</h1>
            <p className="text-center quote">
              Innovation distinguishes between a leader and a follower
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Index;
