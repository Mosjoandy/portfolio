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
          <Link to="/" id="navButtons" className={window.location.pathname === "/" ? "nav-link" : "nav-link"}>
            About
              </Link>
        </li>
        <div class="btn-group dropbottom">
          <div class={window.location.pathname === "/odin" || "/share" ? "btn dropdown-toggle nav-link" : "nav-link"} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Projects
          </div>
          <div class="dropdown-menu">
            <li className="nav-item">
              <Link to="/odin" id="navButtons" className={window.location.pathname === "/odin" ? "nav-link" : "nav-link"}>
                Odin
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/share" id="navButtons" className={window.location.pathname === "/share" ? "nav-link" : "nav-link"}>
                Share
              </Link>
            </li>
          </div>
        </div>
        <li className="nav-item">
          <Link to="/Contact" id="navButtonsLast" className={window.location.pathname === "/contact" ? "nav-link" : "nav-link"}>
            Contact
              </Link>
        </li>
      </div>
    </div>
  </nav>
);

export default Nav;
