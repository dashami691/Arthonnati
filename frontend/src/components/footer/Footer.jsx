import React from "react";

const footerStyle = {
  background: "#232331",
  color: "#fff",
  padding: "40px 0 10px 0",
  fontFamily: "'Poppins', 'Roboto Condensed', sans-serif",
  borderTop: "4px solid #0071b9",
};

const linkStyle = {
  color: "#0071b9",
  textDecoration: "none",
  margin: "0 10px",
  fontWeight: 500,
};

const iconStyle = {
  color: "#0071b9",
  margin: "0 8px",
  fontSize: "1.3em",
};

const Footer = () => (
  <footer style={footerStyle}>
    <div className="container">
      <div className="row g-4">
        {/* About Section */}
        <div className="col-lg-3 col-md-6">
          <h5 className="footer-heading mb-3">About Arthonnati</h5>
          <p className="footer-text small">
            We are trusted Financial Advisor and MFD on mission of improving financial knowledge & awareness of Indian Families. Our aim is to help them during every life phase of wealth protection, creation and smooth distribution. We are proudly doing this since from last 11+ years for 250+ Individuals & Families.
          </p>
          <div className="social-icons">
            <a href="#" className="social-link">
              <i className="fab fa-twitter" style={iconStyle}></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-facebook" style={iconStyle}></i>
            </a>
            <a href="https://www.instagram.com/arthonnati_financial_services?utm_source=qr&igsh=MTVmZnVzYmsyMDFidg==" className="social-link">
              <i className="fab fa-instagram" style={iconStyle}></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-linkedin" style={iconStyle}></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-github" style={iconStyle}></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="col-lg-3 col-md-6">
          <h5 className="footer-heading mb-3">Quick Links</h5>
          <ul className="list-unstyled">
            {[
              { name: "home", href: "/" },
              { name: "about", href: "#about" },
              { name: "contact", href: "#contact" },
              { name: "service", href: "#service" },
              {name: "testimony", href: "#testimony" }
            ].map((link) => (
              <li className="mb-2" key={link.name}>
                <a href={link.href} className="footer-link" style={linkStyle}>
                  <span className="link-text bi bi-arrow-right-short link-icon">
                    {link.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-lg-3 col-md-6">
          <h5 className="footer-heading mb-3">Our Address</h5>
          <ul className="list-unstyled footer-text small">
            <li className="mb-2">
              <p className="bi bi-geo-alt-fill me-2">A/2, Laxmi Complex, Plot-84,<br />
              Sector-7, Indrayaninagar,<br />
              Bhosari, Pune 411026</p>
            </li>
            <li className="mb-2">
              <p className="bi bi-telephone-fill me-2"> +91 9011010704</p>
            </li>
            <li className="mb-2">
              <p className="bi bi-envelope-fill me-2">
                arthonnati.fs@gmail.com<br/>
              anilkolekar25@gmail.com
              </p>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="col-lg-3 col-md-6">
          <h5 className="footer-heading mb-3">Newsletter</h5>
          <form className="newsletter-form">
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control form-control-sm"
                placeholder="Enter email"
              />
              <button className="btn btn-primary btn-sm" type="button">
                <i className="bi bi-send-fill"></i>
              </button>
            </div>
          </form>
          <div className="scroll-top text-end">
            <button className="btn-scroll-top">
              <i
                className="bi bi-arrow-up-circle-fill"
                style={{ color: "#0071b9", fontSize: "1.5rem" }}
              ></i>
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-3 mt-4 border-top text-white-50">
        <small className="footer-text">
          © 2024 Arthonnati Financial Services. All rights reserved.
          <p>Privacy | Terms</p>
        </small>
      </div>
    </div>
  </footer>
);

export default Footer;
