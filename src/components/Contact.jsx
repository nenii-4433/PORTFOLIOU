import React, { useState, useRef } from "react";
import "./Contact.css";

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // null, 'sending', 'success', 'error'
  const [statusText, setStatusText] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setStatusText("Sending your message...");

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey || accessKey === "YOUR_ACCESS_KEY_HERE") {
      setStatus("error");
      setStatusText("Please configure your Web3Forms Access Key in the .env file.");
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Contact Form Submission from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setStatusText("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
        // Clear success message after 5 seconds
        setTimeout(() => setStatus(null), 5000);
      } else {
        setStatus("error");
        setStatusText(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setStatusText("Failed to send message. Please check your connection.");
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-container glass-panel">
          <div className="contact-info">
            <h3>Let's collaborate!</h3>
            <p>
              I am currently open for exciting new opportunities. Whether you
              have a question or just want to say hi, I'll try my best to get
              back to you!
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <span className="item-label">Email</span>
                  <a
                    href="mailto:mhussain200004@gmail.com"
                    className="item-value"
                  >
                    mhussain200004@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div>
                  <span className="item-label">Phone</span>
                  <span className="item-value">+92(336)-3301661</span>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="#" aria-label="GitHub" className="social-link">
                GH
              </a>
              <a href="#" aria-label="LinkedIn" className="social-link">
                IN
              </a>
              <a href="#" aria-label="Twitter" className="social-link">
                TW
              </a>
              <a href="#" aria-label="Dribbble" className="social-link">
                DR
              </a>
            </div>
          </div>

          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
                placeholder="Your project details..."
                rows="5"
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className={`btn btn-primary btn-submit ${status === "sending" ? "loading" : ""}`}
              disabled={status === "sending"}
            >
              {status === "sending" ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : "Send Message"}
            </button>

            {status && status !== "sending" && (
              <div className={`status-message ${status}`}>
                {status === "success" ? "✓ " : "✕ "}
                {statusText}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
