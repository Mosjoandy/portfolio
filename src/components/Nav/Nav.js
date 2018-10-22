import React from "react";
// import { Link } from "react-router-dom";
import "./Nav.css";
import Fade from "react-reveal/Fade";

const Nav = () => (
  <Fade top>
    <div id="upperBar">
      <nav id="topBar" className="navbar navbar-transparent rounded-bottom">
        <ul className="nav justify-content-center mx-auto">
          <li className="nav-item rounded">
            <a className="text-white btn" type="btn" role="button" href="#projectScroll">Work</a>
          </li>
          <li className="nav-item rounded">
            <a className="text-white btn" type="btn" role="button" href="#contactScroll">Contact</a>
          </li>
          <li className="nav-item rounded">
            <a className="text-white btn" type="btn" role="button" href="Resume.pdf" download="Nicholas Chan Resume.pdf">Resume</a>
          </li>
        </ul>
      </nav>
    </div>
  </Fade>
  // <nav className="navbar navbar-expand-lg navbar-light">
  //   {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
  //     <span className="navbar-toggler-icon"></span>
  //   </button> */}
  //   <div className="mx-auto" id="navbarNavAltMarkup">
  //     <div className="navbar-nav mx-auto">
  //       <li className="nav-item">
  //         <Link to="/" id="navButtons" className={window.location.pathname === "/" ? "nav-link" : "nav-link"}>
  //           About
  //             </Link>
  //       </li>
  //       <li className="nav-item">
  //         <Link to="/Contact" id="navButtonsLast" className={window.location.pathname === "/contact" ? "nav-link" : "nav-link"}>
  //           Contact
  //             </Link>
  //       </li>

  //       <div className="btn-group dropbottom">
  //         <div className={window.location.pathname === "/odin" || "/share" ? "btn dropdown-toggle nav-link" : "nav-link"} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  //           Projects
  //         </div>
  //         <div className="dropdown-menu">
  //           <li className="nav-item">
  //             <Link to="/odin" id="navButtons" className={window.location.pathname === "/odin" ? "nav-link" : "nav-link"}>
  //               Odin
  //             </Link>
  //           </li>
  //           <li className="nav-item">
  //             <Link to="/share" id="navButtons" className={window.location.pathname === "/share" ? "nav-link" : "nav-link"}>
  //               Share
  //             </Link>
  //           </li>
  //         </div>
  //       </div>

  //     </div>
  //   </div>
  // </nav>
);

export default Nav;
