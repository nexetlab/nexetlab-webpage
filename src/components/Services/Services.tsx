import { ServiceCard } from './ServiceCard';
import styles from './Services.module.css';
import { 
  Monitor, 
  TrendingUp, 
  PenTool, 
  Bot, 
  BarChart3, 
  Search 
} from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  subServices: string[];
  gradient: string;
  color: string;
}

export const Services = () => {
  const services: Service[] = [
    {
      title: "Website Development",
      description: "Custom websites from landing pages to full e-commerce solutions",
      icon: Monitor,
      subServices: ["Landing Pages", "E-commerce", "Web Apps"],
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "#667eea"
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive strategies to grow your online presence",
      icon: TrendingUp,
      subServices: ["SEO", "Social Media", "PPC"],
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      color: "#f093fb"
    },
    {
      title: "Content Writing",
      description: "Engaging content that converts visitors to customers",
      icon: PenTool,
      subServices: ["Blog Posts", "Product Descriptions", "Copywriting"],
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      color: "#4facfe"
    },
    {
      title: "Python Automation",
      description: "Custom scripts to automate repetitive tasks",
      icon: Bot,
      subServices: ["Web Scraping", "Data Processing", "Workflow Automation"],
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      color: "#43e97b"
    },
    {
      title: "Data Tools",
      description: "Custom solutions for data analysis and visualization",
      icon: BarChart3,
      subServices: ["Dashboards", "Reports", "Data Pipelines"],
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      color: "#fa709a"
    },
    {
      title: "Research Support",
      description: "Academic and market research assistance",
      icon: Search,
      subServices: ["Literature Reviews", "Data Collection", "Analysis"],
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      color: "#a8edea"
    }
  ];

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>What We Offer</span>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <p className={styles.sectionSubtitle}>
            Comprehensive digital solutions tailored to your business needs. 
            From cutting-edge web development to powerful automation tools.
          </p>
        </div>
        
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              index={index}
            />
          ))}
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className={styles.backgroundDecor}>
        <div className={styles.decorCircle1}></div>
        <div className={styles.decorCircle2}></div>
        <div className={styles.decorCircle3}></div>
      </div>
    </section>
  );
};