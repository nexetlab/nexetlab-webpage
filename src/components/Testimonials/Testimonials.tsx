import styles from './Testimonials.module.css';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
  rating: number;
}

export const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director, TechCorp",
      quote: "DigitalAgency transformed our online presence. Our website traffic increased by 300% since they redesigned our site and implemented their SEO strategy. The team was professional and delivered beyond our expectations.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder, StartupX",
      quote: "The automation tools they built saved us hundreds of hours in manual work. Their technical expertise and attention to detail made the entire process seamless. Highly recommend their development services.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "CEO, RetailSolutions",
      quote: "Their e-commerce solution was exactly what we needed. The team was responsive, creative, and delivered ahead of schedule. We've seen a 40% increase in conversions since launch.",
      image: "https://randomuser.me/api/portraits/women/63.jpg",
      rating: 4
    }
  ];

  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Client Testimonials</h2>
          <p className={styles.subtitle}>
            Don't just take our word for it - hear what our clients say
          </p>
        </header>
        
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className={styles.testimonialCard}>
              <div className={styles.quoteContainer}>
                <svg 
                  className={styles.quoteIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <p className={styles.quote}>{testimonial.quote}</p>
              </div>
              
              <div className={styles.clientInfo}>
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className={styles.clientImage}
                  width={56}
                  height={56}
                  loading="lazy"
                />
                <div className={styles.clientDetails}>
                  <h3 className={styles.clientName}>{testimonial.name}</h3>
                  <p className={styles.clientRole}>{testimonial.role}</p>
                  <div className={styles.rating}>
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={styles.starIcon}
                        viewBox="0 0 20 20"
                        fill={i < testimonial.rating ? "currentColor" : "none"}
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};