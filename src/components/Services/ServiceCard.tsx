import styles from './Services.module.css';

interface Service {
  title: string;
  description: string;
  icon: string;
  subServices: string[];
}

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.serviceIcon}>{service.icon}</div>
      <h3 className={styles.serviceTitle}>{service.title}</h3>
      <p className={styles.serviceDescription}>{service.description}</p>
      <ul className={styles.serviceList}>
        {service.subServices.map((sub, i) => (
          <li key={i} className={styles.serviceListItem}>
            <span className={styles.bullet}>•</span> {sub}
          </li>
        ))}
      </ul>
    </div>
  );
};