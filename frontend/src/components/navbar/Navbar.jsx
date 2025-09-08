import React, { useState } from "react";
import "./Navbar.css";
import logo from "./logo.jpeg"; // Adjust path if you're moving the file elsewhere

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const handleDropdownToggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <header>
      <div className="header">
        <section>
          <span className="cross parallelogram">
            <img src={logo} className="logo skew-fix" alt="LOGO" />
          </span>
        </section>
        <section>
          <div className="top-tab">
            <span>
              <a href="tel:7796659059">
                <i className="fa fa-phone"></i> (+91) 7796659059
              </a>
              <a href="mailto:arthonnati.fs@gmail.com; anilkolekar25@gmail.com">
                <i className="fa fa-envelope"></i> arthonnati.fs@gmail.com; anilkolekar25@gmail.com
              </a>
            </span>
            <span>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="https://www.instagram.com/arthonnati_financial_services?utm_source=qr&igsh=MTVmZnVzYmsyMDFidg=="><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </span>
          </div>
          <nav className={`topnav${menuOpen ? " responsive" : ""}`} id="myTopnav">
            <img src={logo} id="res_logo" alt="logo" />
            <a href="#home" className="active">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
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