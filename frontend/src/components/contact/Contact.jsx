import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./contact.css";

const Contact = () => {
  // Toggle this to true when you want the contact form visible again
  const SHOW_CONTACT_FORM = false;
  // Hooks must be called unconditionally — declare them before any early return
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    newsletter: false,
  });
  const [showPopup, setShowPopup] = useState(false);

  if (!SHOW_CONTACT_FORM) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://arthonnati-backend.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setShowPopup(true);
        setForm({
          firstName: "",
          lastName: "",
          company: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          newsletter: false,
        });
        setTimeout(() => setShowPopup(false), 2000);
      } else {
        alert("Error submitting the form. Please try again later.");
      }
    } catch (error) {
      console.error("Backend submission error:", error);
      alert("Error submitting the form. Please try again later.");
    }
  };

  return (
    <div className="form-container">
      {/* Popup */}
      {showPopup && (
        <div className="popup-message">
          <span>Submitted successfully!</span>
        </div>
      )}
      <div className="card-pattern"></div>
      <div className="form-title">
        <h3>
          <i className="fas fa-briefcase"></i> Business Contact Form
        </h3>
      </div>
      <h2 className="form-section-title">Business Inquiry</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-4">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6 mb-4">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="company" className="form-label">
            Company
          </label>
          <input
            type="text"
            className="form-control"
            id="company"
            name="company"
            value={form.company}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <div className="input-group">
            <span className="input-group-text bg-light border-end-0">
              <i className="fas fa-envelope text-muted"></i>
            </span>
            <input
              type="email"
              className="form-control border-start-0"
              id="email"
              name="email"
              placeholder="name@company.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <div className="input-group">
            <span className="input-group-text bg-light border-end-0">
              <i className="fas fa-phone text-muted"></i>
            </span>
            <input
              type="tel"
              className="form-control border-start-0"
              id="phone"
              name="phone"
              placeholder="+91 1234567890"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="form-label">
            Subject
          </label>
          <select
            className="form-select"
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select a subject
            </option>
            <option value="general">General Inquiry</option>
            <option value="support">Technical Support</option>
            <option value="sales">Sales</option>
            <option value="partnership">Partnership</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="mb-4 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="newsletter"
            name="newsletter"
            checked={form.newsletter}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="newsletter">
            Subscribe to our newsletter
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Send Message <i className="fas fa-arrow-right ms-1"></i>
        </button>
      </form>
    </div>
  );
};

export default Contact;
