import React from 'react';
import './Projects.css';
import ivyImage from '../assets/images/ivy.png';
import targetsImage from '../assets/images/targets.png';
import iphoneImage from '../assets/images/iphone.png';
import tdcImage from '../assets/images/tdc.png';
import feelwiseImage from '../assets/images/feelwise.png';
import prodmastImage from '../assets/images/prodmast.png';
import zenpayImage from '../assets/images/zenpay.png';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      name: 'Ivy Interactive Solutions',
      description: 'A modern, interactive website built for Ivy Interactive Solutions, featuring dynamic elements and responsive design.',
      tags: ['React', 'CSS', 'JavaScript'],
      image: ivyImage,
      liveLink: 'https://ivy-interactive.vercel.app/',
    },
    {
      id: 2,
      name: 'Targets Live',
      description: 'A live tracking and management website for Targets, integrating real-time data updates and streamlined user flows.',
      tags: ['HTML', 'Bootstrap', 'JS'],
      image: targetsImage,
      liveLink: 'https://ivy-qmws.vercel.app/',
    },
    {
      id: 3,
      name: 'iPhone Landing Page Clone',
      description: 'A pixel-perfect clone of the Apple iPhone landing page, focusing on sleek animations and completely responsive styling.',
      tags: ['HTML5', 'CSS3'],
      image: iphoneImage,
    },
    {
      id: 4,
      name: 'Diabetes Center',
      description: 'A comprehensive landing page for a Diabetes Center, built with a mobile-first approach for healthcare accessibility.',
      tags: ['Bootstrap', 'HTML', 'CSS'],
      image: tdcImage,
    },
    {
      id: 5,
      name: 'Feel Wise',
      description: 'A full-stack mental wellness application with a robust frontend and scalable data storage for user tracking.',
      tags: ['HTML', 'CSS', 'JavaScript', 'MongoDB'],
      image: feelwiseImage,
    },
    {
      id: 6,
      name: 'Prodmast Dribbble Clone',
      description: 'A pixel-perfect UI clone of the Prodmas R Dribbble design, featuring a clean, responsive layout and modern aesthetics.',
      tags: ['HTML5', 'CSS3', 'UI/UX'],
      image: prodmastImage,
    },
    {
      id: 7,
      name: 'Zenpay Dribbble Clone',
      description: 'A high-fidelity frontend translation of the Zenpay Dribbble template, focusing on interactive elements and sleek styling.',
      tags: ['HTML5', 'CSS3', 'UI/UX'],
      image: zenpayImage,
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Selected Works</h2>
        
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="card-bg-image">
                <img src={project.image} alt={project.name} />
                <div className="bg-gradient"></div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{project.name}</h3>
                <p className="card-desc">{project.description}</p>
                <div className="card-tags">
                  {project.tags.slice(0, 2).map((tag, index) => (
                    <div key={index} className="tag-pill">
                      {index === 0 && <span className="tag-icon">🏆</span>}
                      {tag}
                    </div>
                  ))}
                </div>
                <a href={project.liveLink || "#"} target={project.liveLink ? "_blank" : undefined} rel={project.liveLink ? "noopener noreferrer" : undefined} className="reserve-btn">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-cta">
          <a href="#" className="btn btn-outline">View Complete Archive</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
