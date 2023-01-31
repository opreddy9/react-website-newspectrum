import React, { Fragment } from "react";
import { Link } from "react-router-dom";
function Nav1() {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          AKOVA
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active mx-5">
              <Link className="nav-link" to="/studenthome">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active mx-5">
              <Link className="nav-link" to="apple.com">
                New Idea
              </Link>
            </li>
            <li className="nav-item active mx-5">
              <Link className="nav-link" to="apple.com">
                Notifications
              </Link>
            </li>
            <li className="nav-item mx-5">
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <Link to="/search">
                  <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                  >
                    Search
                  </button>
                </Link>
              </form>
            </li>
            <li className="nav-item active mx-5">
              <Link className="nav-link" to="/search">
                SEARCH by #TAGS
              </Link>
            </li>
            <li className="nav-item ml-auto">
              <div className="dropdown show">
                <a
                  className="btn btn-primary dropdown-toggle"
                  href="apple.com"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-person-lines-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                  </svg>
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <Link className="dropdown-item" to="/studentdash">
                    Profile
                  </Link>
                  <Link className="dropdown-item" to="/studentdash">
                    My Projects
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
}

export default Nav1;
