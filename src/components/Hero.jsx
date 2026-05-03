import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <div className="badge animate-slide-up">🚀 Innovation Meets Code</div>
          <h1 className="hero-title">
            Architecting <br />
            <span className="gradient-text shimmer">Digital Excellence</span>
          </h1>
          <p className="hero-description delay-1">
            As a <strong>Creative Full-Stack Engineer</strong>, I transform complex architectural 
            challenges into seamless, high-performance digital experiences.
          </p>
          <div className="hero-cta delay-2">
            <a href="#projects" className="btn btn-primary btn-glow">
              Explore Portfolio
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a href="#contact" className="btn btn-outline">Start a Project</a>
          </div>
        </div>

        <div className="hero-visual delay-3">
          <div className="visual-element glass-panel floating">
            <div className="code-header">
              <div className="dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="filename">profile.ts</div>
            </div>
            <div className="code-snippet">
              <span className="keyword">const</span> <span className="entity">developer</span> = {'{'}
              <br/>
              &nbsp;&nbsp;name: <span className="string">'Hussain Tahir'</span>,
              <br/>
              &nbsp;&nbsp;role: <span className="string">'Full-Stack Engineer'</span>,
              <br/>
              &nbsp;&nbsp;focus: <span className="string">'Performance & UX'</span>,
              <br/>
              &nbsp;&nbsp;passion: <span className="string">'Building Dreams'</span>
              <br/>
              {'}'};
            </div>
          </div>
          <div className="decorative-glow top"></div>
          <div className="decorative-glow bottom"></div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrows">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>

  );
};

export default Hero;
