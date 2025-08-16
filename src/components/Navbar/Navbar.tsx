import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only collapse if user has scrolled down and is not at the top
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsCollapsed(true);
      }
      
      lastScrollY = currentScrollY;

      // Clear existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Set new timeout to expand navbar after 1 second of no scrolling
      const newTimeout = setTimeout(() => {
        setIsCollapsed(false);
      }, 3000);
      
      setScrollTimeout(newTimeout);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [scrollTimeout]);

  const handleNavbarClick = () => {
    if (isCollapsed) {
      setIsCollapsed(false);
    }
  };

  return (
    <nav 
      className={`${styles.navbar} ${isCollapsed ? styles.collapsed : ''}`}
      onClick={handleNavbarClick}
    >
      <a href="#home" className={styles.navLink}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9,22 9,12 15,12 15,22" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
        <span>Home</span>
      </a>
      
      <a href="#services" className={styles.navLink}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          <line x1="8" y1="21" x2="16" y2="21" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          <line x1="12" y1="17" x2="12" y2="21" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
        <span>Services</span>
      </a>

      {/*
      <a href="#pricing" className={styles.navLink}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                <path d="M12 18V6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </svg>
              <span>Pricing</span>
            </a>
      */}
      
      <a href="#portfolio" className={styles.navLink}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="2" y="6" width="20" height="12" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          <path d="M12 12h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          <path d="M17 8v.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          <circle cx="9" cy="16" r="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          <path d="m2 14 4.5-4.5a2 2 0 0 1 2.83 0L16 16" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
        <span>Work</span>
      </a>
      
      <a href="#contact" className={styles.navLink}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" 
                strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
        <span>Contact</span>
      </a>
    </nav>
  );
};