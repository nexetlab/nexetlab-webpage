import React from 'react';
import styles from './Topbar.module.css';
import { FiInfo } from 'react-icons/fi';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import logo from './logo.png';

const Topbar: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.topbar} aria-label="Main header">
      {/* Animated background element */}
      <div className={styles.animatedBackground}></div>
      
      <div className={styles.container}>
        {/* Left side - Logo + Agency name (both clickable) */}
        <div 
          className={styles.brand} 
          onClick={() => scrollToSection('home')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && scrollToSection('home')}
        >
          <img src={logo} alt="neXet Lab Logo" className={styles.logo} />
          <h1 className={styles.agencyName}>
            ne<span className={styles.xLetter}>X</span>et Lab
          </h1>
        </div>

        {/* Desktop view - Right side elements */}
        <div className={styles.desktopInfo}>
          <div className={styles.location}>
            <span>Sydney, Australia</span>
          </div>
          <a href="mailto:nexetlab@gmail.com" className={styles.email}>
            <span>nexetlab@gmail.com</span>
          </a>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com/profile.php?id=61576181877541" aria-label="Facebook">
              <FaFacebook className={styles.socialIcon} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61576181877541" aria-label="LinkedIn">
              <FaLinkedin className={styles.socialIcon} />
            </a>
            <a href="https://github.com/nexetlab" aria-label="GitHub">
              <FaGithub className={styles.socialIcon} />
            </a>
          </div>
          <button 
            className={styles.aboutButton}
            onClick={() => scrollToSection('about')}
            aria-label="About us"
          >
            <FiInfo className={styles.icon} />
            <span>About Us</span>
          </button>
        </div>

        {/* Mobile view - Info button */}
        <button
            className={styles.mobileInfoButton}
            onClick={() => scrollToSection('about')}
            aria-label="Show information"
            >
            <FiInfo className={styles.infoIcon} />
    </button>
      </div>
    </header>
  );
};

export default Topbar;