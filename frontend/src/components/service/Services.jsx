import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./services.css"; // Assuming you have a CSS file for styling

const services = [
  {
    title: "Financial Goal Planning",
    description:
      "Plan and achieve your financial goals with expert guidance tailored to your needs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="80" height="80">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    link: "https://my-planner.in/login"
  },
  {
    title: "Mutual Fund Portfolio Management",
    description:
      "Professional management of your mutual fund investments for optimal returns.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="80" height="80">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16V8m4 8V8m4 8v-4" />
      </svg>
    ),
    link: "http://www.assetplus.in/mfd/ARN-142724"
  },
  {
    title: "Health Insurance",
    description:
      "Secure your health and finances with comprehensive insurance plans.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="80" height="80">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    link: "https://www.assetplus.in/#!/login"
  },
  {
    title: "Term Life Insurance",
    description:
      "Protect your loved ones with affordable term life insurance solutions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="80" height="80">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    link: "https://www.assetplus.in/#!/login"
  },
  {
    title: "NPS Investment",
    description:
      "Invest in National Pension System for a secure retirement.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="80" height="80">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8" />
      </svg>
    ),
    link: "https://nps.kfintech.com/nps/registration?planType=1&mode=1&source=web&referrer=arthonnati"
  },
  {
    title: "SWP Pension Plans",
    description:
      "Enjoy regular income post-retirement with SWP pension plans.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="80" height="80">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m-4-4h8" />
      </svg>
    ),
    link: "https://www.assetplus.in/mfd/ARN-142724"
  }
];

const Services = () => (
  <div className="section-full p-t120 p-b90" style={{ backgroundImage: "url(https://thewebmax.org/indusza/images/background/map-bg-dark2.png)" }}>
    <div className="container">
      <div className="section-head center wt-small-separator-outer">
        <div className="wt-small-separator site-text-primary">
          <div className="sep-leaf-left"></div>
          <div>Our Services</div>
        </div>
        <h2 className="wt-title">We Provide Best Services</h2>
      </div>
      <div className="s-section">
        <div className="row">
          {services.map((service, idx) => (
            <div className="col-lg-4 col-md-6 m-b30" key={idx}>
              <div className="service-icon-box-two">
                <div className="wt-icon-box-wraper">
                  <div className="icon-xl inline-icon">
                    <span className="icon-cell site-text-primary">{service.icon}</span>
                  </div>
                </div>
                <div className="service-icon-box-title">
                  <h4 className="wt-title">
                    <a href={service.link}>{service.title}</a>
                  </h4>
                </div>
                <div className="service-icon-box-content">
                  <p>{service.description}</p>
                  <a href={service.link} className="site-button-link site-text-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Services;