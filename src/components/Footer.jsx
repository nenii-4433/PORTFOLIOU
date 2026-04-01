import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <a href="#home" className="logo">
            Port<span className="accent">folio.</span>
          </a>
          <div className="footer-links">
            <a href="#about" className="footer-link">About</a>
            <a href="#projects" className="footer-link">Projects</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Muhammad Hussain Tahir. All rights reserved.</p>
          <p className="made-with">
            Designed & Built with <span className="heart">❤️</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
