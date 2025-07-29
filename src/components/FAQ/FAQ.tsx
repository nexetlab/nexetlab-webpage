import { useState } from 'react';
import styles from './FAQ.module.css';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How long does a typical website project take?",
      answer: "The timeline varies depending on project scope. A basic website typically takes 2-4 weeks, while complex projects can take 6-8 weeks or longer. We provide a detailed timeline after our initial consultation."
    },
    {
      question: "Do you offer ongoing maintenance after launch?",
      answer: "Yes, we offer various maintenance packages including security updates, content updates, performance monitoring, and technical support to keep your digital assets running smoothly."
    },
    {
      question: "What's included in your SEO services?",
      answer: "Our comprehensive SEO package includes keyword research, on-page optimization, technical SEO improvements, content strategy, and monthly performance reporting. We also offer specialized link-building services."
    },
    {
      question: "Can you help with hosting and domain registration?",
      answer: "Absolutely. We provide full-service hosting solutions and domain management, offering recommendations based on your specific needs and handling all technical setup."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, bank transfers, and PayPal. For larger projects, we offer flexible payment plans to accommodate your budget."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes, we serve clients worldwide. Our distributed team allows us to work across multiple time zones, ensuring we can accommodate clients in different regions."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.subtitle}>
            Answers to common questions about our services and process
          </p>
        </header>

        <div className={styles.faqContainer}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                onClick={() => toggleAccordion(index)}
                className={`${styles.faqQuestion} ${activeIndex === index ? styles.active : ''}`}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{faq.question}</span>
                <svg 
                  className={`${styles.arrowIcon} ${activeIndex === index ? styles.rotated : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`${styles.faqAnswer} ${activeIndex === index ? styles.visible : ''}`}
              >
                <div className={styles.answerContent}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};