import styles from './About.module.css';

export const About = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Building the Future, Today</h2>
          <p className={styles.subtitle}>
            At neXet Lab, we're not just keeping up with technology - we're creating what comes next.
          </p>
        </header>

        <div className={styles.content}>
          <div className={styles.textContent}>
            <p className={styles.paragraph}>
              Our team of visionaries, engineers, and creatives work together to develop solutions that push boundaries and redefine possibilities.
            </p>
            
            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>What Does "neXet" Mean?</h3>
              <p className={styles.highlightText}>
                The name "neXet" represents our core philosophy: Next Emerging Technology. We combine the words "Next" and "Emerging Technology" to symbolize our commitment to being at the forefront of technological innovation. The capitalized "X" represents the unknown variable we're constantly solving for - the future challenges we're preparing to meet.
              </p>
            </div>

            <p className={styles.paragraph}>
              Founded in 2025, neXet Lab has quickly established itself as a leader in innovative IT solutions. From content creation to complex dataset development, we approach every project with the same commitment to excellence and forward-thinking design.
            </p>
          </div>

          <div className={styles.missionSection}>
            <h3 className={styles.missionTitle}>Our Mission</h3>
            <p className={styles.missionText}>
              To empower businesses and individuals through innovative technology solutions that anticipate future needs. We believe in building not just for today, but for the challenges and opportunities of tomorrow.
            </p>
          </div>

          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>💡</div>
              <h4 className={styles.valueTitle}>Innovation</h4>
              <p className={styles.valueDescription}>
                Constantly exploring new technologies and approaches to solve complex problems
              </p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🤝</div>
              <h4 className={styles.valueTitle}>Collaboration</h4>
              <p className={styles.valueDescription}>
                Working together with clients and team members to achieve exceptional results
              </p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🎯</div>
              <h4 className={styles.valueTitle}>Excellence</h4>
              <p className={styles.valueDescription}>
                Committed to delivering the highest quality in every project we undertake
              </p>
            </div>
          </div>

          <div className={styles.closingSection}>
            <p className={styles.closingText}>
              At neXet Lab, we combine technical expertise with creative problem-solving to deliver solutions that are both cutting-edge and practical. Our approach is rooted in research, collaboration, and a relentless pursuit of excellence.
            </p>
            <p className={styles.closingText}>
              Whether it's developing custom datasets, crafting compelling content, or building robust web applications, we're committed to delivering work that moves the needle for our clients and pushes the boundaries of what's possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};