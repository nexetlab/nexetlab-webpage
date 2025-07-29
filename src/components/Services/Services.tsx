import { ServiceCard } from './ServiceCard';
import styles from './Services.module.css';

interface Service {
  title: string;
  description: string;
  icon: string;
  subServices: string[];
}

export const Services = () => {
  const services: Service[] = [
    {
      title: "Website Development",
      description: "Custom websites from landing pages to full e-commerce solutions",
      icon: "💻",
      subServices: ["Landing Pages", "E-commerce", "Web Apps"]
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive strategies to grow your online presence",
      icon: "📈",
      subServices: ["SEO", "Social Media", "PPC"]
    },
    {
      title: "Content Writing",
      description: "Engaging content that converts visitors to customers",
      icon: "✍️",
      subServices: ["Blog Posts", "Product Descriptions", "Copywriting"]
    },
    {
      title: "Python Automation",
      description: "Custom scripts to automate repetitive tasks",
      icon: "🤖",
      subServices: ["Web Scraping", "Data Processing", "Workflow Automation"]
    },
    {
      title: "Data Tools",
      description: "Custom solutions for data analysis and visualization",
      icon: "📊",
      subServices: ["Dashboards", "Reports", "Data Pipelines"]
    },
    {
      title: "Research Support",
      description: "Academic and market research assistance",
      icon: "🔍",
      subServices: ["Literature Reviews", "Data Collection", "Analysis"]
    }
  ];

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Services</h2>
        <p className={styles.sectionSubtitle}>
          Comprehensive digital solutions tailored to your business needs
        </p>
        
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};