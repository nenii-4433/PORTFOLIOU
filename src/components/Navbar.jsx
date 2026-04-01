import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.header 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container nav-container">
        <motion.a 
          href="#home" 
          className="logo"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Port<span className="accent">folio.</span>
        </motion.a>

        <nav className="nav-links">
          {['About', 'Projects', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link"
              variants={itemVariants}
              whileHover={{ y: -2, color: 'var(--accent-color)' }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        <motion.div variants={itemVariants}>
          <a href="#contact" className="btn btn-outline nav-cta">
            Let's Talk
          </a>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Navbar;
