import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <p className="hero-subtitle">Hello, I'm</p>
          <h1 className="hero-title">
            Front-end <br />
            <span className="gradient-text">Developer</span>
          </h1>
          <p className="hero-description delay-1">
            I craft exceptionally beautiful, highly responsive, and robust web applications.
            Let's build something amazing together.
          </p>
          <div className="hero-cta delay-2">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Get In Touch</a>
          </div>
        </div>
        <div className="hero-visual delay-3">
          <div className="visual-element glass-panel">
            <div className="code-snippet">
              <span className="keyword">const</span> <span className="entity">developer</span> = {'{'}
              <br/>
              &nbsp;&nbsp;name: <span className="string">'Muhammad Hussain Tahir'</span>,
              <br/>
              &nbsp;&nbsp;skills: [<span className="string">'React'</span>, <span className="string">'Tailwind'</span>, <span className="string">'MongoDB'</span>],
              <br/>
              &nbsp;&nbsp;passion: <span className="string">'Building Dreams'</span>
              <br/>
              {'}'};
            </div>
          </div>
          <div className="decorative-circle top"></div>
          <div className="decorative-circle bottom"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
