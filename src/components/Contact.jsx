import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally you would handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! This is a UI demo.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-container glass-panel">
          <div className="contact-info">
            <h3>Let's collaborate!</h3>
            <p>
              I am currently open for exciting new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <span className="item-label">Email</span>
                  <a href="mailto:mhussain200004@gmail.com" className="item-value">mhussain200004@gmail.com</a>
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
              <a href="#" aria-label="GitHub" className="social-link">GH</a>
              <a href="#" aria-label="LinkedIn" className="social-link">IN</a>
              <a href="#" aria-label="Twitter" className="social-link">TW</a>
              <a href="#" aria-label="Dribbble" className="social-link">DR</a>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                className="form-control" 
                placeholder="Muhammad Hussain"
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
                placeholder="mhussain200004@gmail.com"
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
            <button type="submit" className="btn btn-primary btn-submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
