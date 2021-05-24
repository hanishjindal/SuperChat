import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav
        style={{ backgroundColor: "#e3f2fd" }}
        className="navbar fixed-top navbar-expand-lg navbar-light"
      >
        <div className="container-fluid">
          <Link className="navbar-brand superNav" to="/">
            <b style={{ color: "black" }}>SuperChat</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse navTabs"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav d-flex">
              <Link className="nav-link active navGap js-scroll-trigger" to="/">
                Home
              </Link>
              <Link
                className="nav-link active navGap js-scroll-trigger"
                to="/superchat/"
              >
                Superchat
              </Link>
              <Link
                className="nav-link active navGap js-scroll-trigger"
                to="/about"
              >
                About
              </Link>
              <Link
                className="nav-link active navGap js-scroll-trigger"
                to="/contact"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
