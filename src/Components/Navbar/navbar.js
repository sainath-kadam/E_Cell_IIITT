// Navbar.jsInitiatives

import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../Assests/logo1.png";

const Navbar = ({ about, org }) => {
  const [active, setActive] = useState(false);
  return (
    <nav className="navbar">
      <div className="brand-title">
        <img className="e_cell-logo" src={Logo} alt="logo" />
      </div>
      <a className="toggle-button" onClick={() => setActive(!active)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className={`${active ? "active" : null} navbar-links`}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          {/* {window.location.pathname === "/About" ||
          window.location.pathname === "/What_We_Do" ||
          window.location.pathname === "/prizes" ? null : (
            <li onClick={() => setActive(!active)}>
              <a onClick={about}>About</a>
            </li>
          )} */}
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/What_We_Do">What We Do</a>
          </li>
          <li onClick={() => setActive(!active)}>
            <a href="/Initiatives
">Initiatives
</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
          {/* <li onClick={() => setActive(!active)}>
            <a href="/Contact">Contact</a>
          </li> */}
        </ul>
      </div>
      <div className="social-media">
        <ul>
            <li>
            <a href="https://www.linkedin.com" target="_blank">
    <i className="fab fa-linkedin"></i></a>
            </li>
            
          <li>
            <a href="https://www.facebook.com" target="_blank">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
