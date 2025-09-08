import React from "react";
import "./aboutus.css";
import profilePic from "./profile.jpeg"; // Make sure this image exists
import assetplusLogo from "../navbar/logo.jpeg"; // AssetPlus logo if different

const AboutCard = () => {
  return (
    <div className="section-full aboutus-section">
      <div className="section-head center wt-small-separator-outer">
        <div className="wt-small-separator site-text-primary">
          <div className="sep-leaf-left"></div>
          <div>About Us</div>
        </div>
        <h2 className="wt-title">Transforming Investments Into Prosperity</h2>
      </div>


      <div className="about-card-container">
        <div className="about-card-left">
          <img src={profilePic} alt="Anil Shivaji Kolekar" className="profile-img" />
          <div className="partner-section">
            <p>Digital Partner</p>
            <img src={assetplusLogo} alt="AssetPlus Logo" className="partner-logo" />
          </div>
        </div>

        <div className="about-card-right">
          <h2 className="company-name">Arthonnati Investment Services</h2>
          <p className="designation">AMFI-Registered Mutual Fund Distributor</p>
          <h3 className="name">Anil Shivaji Kolekar</h3>
          <p className="arn">ARN-142724</p>

          <p className="description">
            AMFI Registered Leading Mutual Fund Distributor. Our experience includes Goal Planning, Mutual Fund & NPS investments,
            Insurance, and Loans against MF. We assist in purchasing pre-IPO stock purchase. We are passionate about helping Indian
            families improve their financial health and awareness. Currently, we are assisting 100+ families on their wealth-creation path.
          </p>

          <div className="contact-info">
            <p><i className="fa fa-phone"></i> +91 9011010704</p>
            <p><i className="fa fa-envelope"></i> anilkolekar25@gmail.com</p>
            <p><i className="fa fa-globe"></i> <a href="https://www.assetplus.in/mfd/ARN-142724" target="_blank" rel="noopener noreferrer">www.assetplus.in/mfd/ARN-142724</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
