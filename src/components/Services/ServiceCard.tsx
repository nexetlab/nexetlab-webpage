import styles from './Services.module.css';

interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  subServices: string[];
  gradient: string;
  color: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

export const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const IconComponent = service.icon;

  return (
    <div 
      className={`${styles.serviceCard} ${styles[`cardDelay${index % 6}`]}`}
      style={{
        '--card-gradient': service.gradient,
        '--card-color': service.color
      } as React.CSSProperties}
    >
      <div className={styles.cardBackground}></div>
      <div className={styles.cardContent}>
        <div className={styles.serviceIconContainer}>
          <div className={styles.serviceIcon}>
            <IconComponent size={48} strokeWidth={1.5} />
          </div>
          <div className={styles.iconGlow}></div>
        </div>
        
        <div className={styles.serviceHeader}>
          <h3 className={styles.serviceTitle}>{service.title}</h3>
          <div className={styles.titleUnderline}></div>
        </div>
        
        <p className={styles.serviceDescription}>{service.description}</p>
        
        <div className={styles.serviceListContainer}>
          <ul className={styles.serviceList}>
            {service.subServices.map((sub, i) => (
              <li key={i} className={styles.serviceListItem}>
                <div className={styles.bulletContainer}>
                  <div className={styles.bullet}></div>
                </div>
                <span className={styles.serviceText}>{sub}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className={styles.cardFooter}>
          <button className={styles.learnMoreBtn}>
            <span>Learn More</span>
            <svg 
              className={styles.arrowIcon} 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className={styles.floatingParticles}>
        <div className={styles.particle1}></div>
        <div className={styles.particle2}></div>
        <div className={styles.particle3}></div>
      </div>
    </div>
  );
};