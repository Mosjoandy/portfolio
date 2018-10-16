import React from "react";
import { Link } from "react-router-dom";
import { Container, Col } from "../Grid";
import "./Nav.css";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link to="/" id="navButtons" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
            About
              </Link>
        </li>
        <li className="nav-item">
          <Link to="/Projects" id="navButtons" className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}>
            Projects
              </Link>
        </li>
        <li className="nav-item">
          <Link to="/Contact" id="navButtonsLast" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
            Contact
              </Link>
        </li>
      </div>
    </div>
  </nav>
);

export default Nav;
