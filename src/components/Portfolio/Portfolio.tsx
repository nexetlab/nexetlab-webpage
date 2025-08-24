import { useState } from 'react';
import styles from './Portfolio.module.css';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  url?: string; // Added optional url field for live project links
}

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "CM Rendering",
      description: "A modern rendering and painting service website, focusing on high-quality rendering solutions.",
      category: "web",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
      url: "https://cmrendering.com.au/"
    },
    {
      id: 2,
      title: "Greenacre Auto Electrical",
      description: "A professional auto electrical service website, offering repair, maintenance, and installations for vehicles.",
      category: "web",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
      url: "https://www.greenacreautoelectrical.com.au/"
    },
    // {
    //   id: 3,
    //   title: "E-commerce Store",
    //   description: "A fully responsive online store with payment integration and inventory management",
    //   category: "web",
    //   image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80"
    // },
    // {
    //   id: 4,
    //   title: "Data Dashboard",
    //   description: "Interactive business analytics dashboard with real-time data visualization",
    //   category: "data",
    //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80"
    // },
    // {
    //   id: 5,
    //   title: "Marketing Automation",
    //   description: "Automated email campaigns with personalized customer journeys",
    //   category: "automation",
    //   image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80"
    // },
    // {
    //   id: 6,
    //   title: "Corporate Website",
    //   description: "Modern corporate website with CMS integration and multilingual support",
    //   category: "web",
    //   image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80"
    // },
    // {
    //   id: 7,
    //   title: "Content Strategy",
    //   description: "Comprehensive blog content strategy with SEO optimization",
    //   category: "content",
    //   image: "https://images.unsplash.com/photo-1546074177-ffdda98d214f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80"
    // },
    // {
    //   id: 8,
    //   title: "Research Tool",
    //   description: "Custom academic research tool with data collection and analysis features",
    //   category: "data",
    //   image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80"
    // }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Our Portfolio</h2>
          <p className={styles.subtitle}>
            Explore our recent projects and client success stories
          </p>
        </header>
        
        <div className={styles.filters}>
          <button 
            onClick={() => setActiveFilter('all')} 
            className={`${styles.filterButton} ${activeFilter === 'all' ? styles.active : ''}`}
          >
            All Projects
          </button>
          <button 
            onClick={() => setActiveFilter('web')} 
            className={`${styles.filterButton} ${activeFilter === 'web' ? styles.active : ''}`}
          >
            Web Development
          </button>
          <button 
            onClick={() => setActiveFilter('data')} 
            className={`${styles.filterButton} ${activeFilter === 'data' ? styles.active : ''}`}
          >
            Data Solutions
          </button>
          <button 
            onClick={() => setActiveFilter('automation')} 
            className={`${styles.filterButton} ${activeFilter === 'automation' ? styles.active : ''}`}
          >
            Automation
          </button>
          <button 
            onClick={() => setActiveFilter('content')} 
            className={`${styles.filterButton} ${activeFilter === 'content' ? styles.active : ''}`}
          >
            Content Strategy
          </button>
        </div>
        
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project) => (
            <article key={project.id} className={styles.projectCard}>
              <div className={styles.imageContainer}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={styles.projectImage}
                  loading="lazy"
                />
                <div className={styles.overlay} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.viewButton}
                  >
                    View Project
                    <svg 
                      className={styles.arrowIcon}
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                )}
                {!project.url && (
                  <button className={styles.viewButton}>
                    View Case Study
                    <svg 
                      className={styles.arrowIcon}
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};