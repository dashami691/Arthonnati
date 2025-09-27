import React, { useState } from "react";
import "./Navbar.css";
import afsLogo from "./AFS Logo.png";
import afsName from "./AFS Name.jpg";
import assetPlusLogo from "./Asset Plus Logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const handleDropdownToggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <header>
      <div className="header">
        <section>
          <div className="cross parallelogram logo-group">
            <div className="logo-and-brand">
              <img src={afsLogo} className="logo afs-logo" alt="AFS Logo" />
              <img src={afsName} className="logo afs-name" alt="AFS Name" />
              <div className="assetplus-wrapper">
                <div className="powered-by">Powered by</div>
                <img src={assetPlusLogo} className="logo assetplus-logo" alt="Asset Plus" />
              </div>
            </div>

            <div className="contact-info">
              <a className="contact-phone" href="tel:9011010704">
                <i className="fa fa-phone"></i>  +91 9011010704
              </a>
              <div className="contact-emails">
                <a className="contact-email" href="mailto:arthonnati.fs@gmail.com">
                  <i className="fa fa-envelope"></i> arthonnati.fs@gmail.com 
                </a>
                <a className="contact-email" href="mailto:anilkolekar25@gmail.com">
                  <i className="fa fa-envelope"></i> anilkolekar25@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <nav className={`topnav${menuOpen ? " responsive" : ""}`} id="myTopnav">
            <img src={afsLogo} id="res_logo" alt="logo" />
            <a href="#home" className="active">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Knowledge Centre</a>
            <a href="#contact">Testimony</a>
            <a href="#contact">Contact</a>
            {/* Right-aligned login block with linked buttons */}
            <div className="login-block" role="region" aria-label="user menu">
              <a
                className="signup-btn"
                href="https://my-planner.in/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                My-Planner <br></br>User Login
              </a>
              <a
                className="signup-btn"
                href="https://www.assetplus.in/#!/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Asset Plus <br></br>User Login
              </a>
              <a
                className="signup-btn primary"
                href="https://www.assetplus.in/mfd/ARN-142724"
                target="_blank"
                rel="noopener noreferrer"
              >
                Signup
              </a>
            </div>
            <a
              href="#!"
              style={{ fontSize: "15px" }}
              className="icon"
              onClick={handleMenuToggle}
            >
              &#9776;
            </a>
          </nav>
        </section>
      </div>
    </header>
  );
};

export default Navbar;