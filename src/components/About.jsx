import React, { useState, useEffect } from 'react';
import './About.css';

const TypewriterText = ({ text, delay = 15, onComplete }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else if (onComplete && currentIndex === text.length) {
      // Adding a small delay before triggering onComplete for better flow
      setTimeout(onComplete, 300);
    }
  }, [currentIndex, delay, text, onComplete]);

  return <span>{currentText}{currentIndex < text.length && <span className="typing-cursor">|</span>}</span>;
};

const About = () => {
  const [showSecondPara, setShowSecondPara] = useState(false);
  const [showElements, setShowElements] = useState(false);

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="mac-browser-window glass-panel">
          <div className="mac-browser-header">
            <div className="mac-browser-buttons">
              <span className="mac-btn close"></span>
              <span className="mac-btn minimize"></span>
              <span className="mac-btn maximize"></span>
            </div>
            <div className="mac-browser-tabs">
              <div className="mac-browser-tab active">
                <svg className="tab-icon" viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                <span className="tab-title">About Me</span>
                <span className="tab-close">×</span>
              </div>
            </div>
          </div>
          <div className="mac-browser-address-bar-container">
            <div className="mac-nav-buttons">
              <svg className="mac-nav-btn" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              <svg className="mac-nav-btn disabled" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              <svg className="mac-nav-btn" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
            </div>
            <div className="mac-address-bar">
              <svg className="mac-lock-icon" viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              <span className="mac-url">portfolio.mhussain/about</span>
            </div>
          </div>
          <div className="mac-browser-content">
            <div className="about-content">
              <div className="about-text">
            <p style={{ minHeight: '110px' }}>
              <TypewriterText 
                text="I am a Software Developer specialized in creating beautiful and interactive digital experiences. My journey started with a curiosity about how things work on the web, which eventually grew into a deep passion for frontend development, UI/UX design, and architecting scalable backend systems." 
                delay={15}
                onComplete={() => setShowSecondPara(true)}
              />
            </p>
            <p style={{ minHeight: '80px' }}>
              {showSecondPara && (
                <TypewriterText 
                  text="When I'm not coding, you can find me exploring new technologies, writing tech blogs, or enjoying a good book. I focus heavily on writing clean, maintainable, and highly efficient code." 
                  delay={15}
                  onComplete={() => setShowElements(true)}
                />
              )}
            </p>
            
            <div className={`stats-grid ${showElements ? 'fade-in' : 'hidden'}`}>
              <div className="stat">
                <h3>1+</h3>
                <span>Years Experience</span>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <span>Projects Completed</span>
              </div>
            </div>
          </div>
          
          <div className={`skills-container ${showElements ? 'fade-in' : 'hidden'}`}>
            <h3 className="skills-title">Core Skills</h3>
            <div className="skills">
              <span className="skill-tag">HTML5 & CSS3</span>
              <span className="skill-tag">JavaScript / ES6+</span>
              <span className="skill-tag">React JS</span>
              <span className="skill-tag">Tailwind CSS</span>
              <span className="skill-tag">Bootstrap</span>
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default About;
