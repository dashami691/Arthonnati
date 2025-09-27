import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./services.css"; // Assuming you have a CSS file for styling

const services = [
  {
    title: "Financial Goal Planning",
    description: "Plan and achieve your financial goals with personalised strategies.",
    icon: (
      // target/goal icon
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
        <path d="M21 12h-3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 3v3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    link: "https://my-planner.in/login"
  },
  {
    title: "Mutual Fund Portfolio Management",
    description: "Professional management of your mutual fund investments for optimal returns.",
    icon: (
      // pie chart / portfolio
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 12A9 9 0 1 1 12 3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 12V3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    link: "http://www.assetplus.in/mfd/ARN-142724"
  },
  {
    title: "SIP",
    description: "Systematic Investment Plan options to build disciplined wealth.",
    icon: (
      // recurring/graph icon
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 14l3-3 4 4 5-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    link: "https://www.assetplus.in/#!/"
  },
  {
    title: "SWP",
    description: "Systematic Withdrawal Plan solutions for regular income.",
    icon: (
      // withdrawal / hand with coin
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 21H4v-4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    link: "https://www.assetplus.in/#!/"
  },
  {
    title: "SIF",
    description: "Specialised Investment Funds tailored to specific goals.",
    icon: (
      // stack of coins / funds
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    link: "https://www.assetplus.in/#!/"
  },
  {
    title: "Retirement Fund Management (SWP)",
    description: "Retirement planning and SWP management to provide steady post-retirement income.",
    icon: (
      // piggy-bank / retirement
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 13v-2a6 6 0 0 0-6-6H9" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 13v3a3 3 0 0 0 3 3h12" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="8" cy="12" r="1" />
      </svg>
    ),
    link: "https://www.assetplus.in/mfd/ARN-142724"
  },
  {
    title: "NPS Investments",
    description: "Invest in the National Pension System (NPS) for long-term retirement benefits.",
    icon: (
      // pension / bank building with rupee-ish symbol
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 10l9-6 9 6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 10v6a7 7 0 0 0 14 0v-6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 12h4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    link: "https://nps.kfintech.com/nps/registration?planType=1&mode=1&source=web&referrer=arthonnati"
  },
  {
    title: "Health Insurance",
    description: "Comprehensive health insurance solutions to protect you and your family.",
    icon: (
      // health cross / heart
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 21s-6-4.35-8.5-6.8C1.8 11.9 4 7 8 7c2 0 3.5 1.5 4 2.5C12.5 8.5 14 7 16 7c4 0 6.2 4.9 4.5 7.2C18 16.65 12 21 12 21z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    link: "https://www.assetplus.in/#!/login"
  },
  {
    title: "Term Life Insurance",
    description: "Affordable term life insurance to protect your family's future.",
    icon: (
      // shield / protection icon
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l7 4v5c0 5-3.5 9-7 11-3.5-2-7-6-7-11V6l7-4z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    link: "https://www.assetplus.in/#!/login"
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
                {/* Number badge */}
                {/* <div className="service-number" aria-hidden>{idx + 1}</div> */}
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