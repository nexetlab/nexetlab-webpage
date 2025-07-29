import styles from './Pricing.module.css';

interface PricingTier {
  name: string;
  price: string;
  features: string[];
  bestValue: boolean;
}

interface AddOn {
  name: string;
  price: string;
}

export const Pricing = () => {
  const pricingTiers: PricingTier[] = [
    {
      name: "Basic Website",
      price: "$499",
      features: [
        "1-3 Pages",
        "Responsive Design",
        "Basic SEO",
        "1 Revision Round",
        "Contact Form"
      ],
      bestValue: false
    },
    {
      name: "Advanced Website",
      price: "$999",
      features: [
        "5-10 Pages",
        "E-commerce Functionality",
        "Advanced SEO",
        "3 Revision Rounds",
        "CMS Integration",
        "Basic Analytics"
      ],
      bestValue: true
    },
    {
      name: "Custom Solution",
      price: "Custom",
      features: [
        "Fully Custom Development",
        "Unlimited Pages",
        "API Integrations",
        "Advanced Analytics",
        "Priority Support",
        "Ongoing Maintenance"
      ],
      bestValue: false
    }
  ];

  const addOns: AddOn[] = [
    { name: "Additional Page", price: "$99/page" },
    { name: "Additional Revision", price: "$49/revision" },
    { name: "Premium Design", price: "$199" },
    { name: "SEO Package", price: "$299" }
  ];

  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Pricing</h2>
          <p className={styles.subtitle}>
            Transparent pricing with no hidden fees (All prices in AUD)
          </p>
        </header>
        
        <div className={styles.tiers}>
          {pricingTiers.map((tier, index) => (
            <article 
              key={index} 
              className={`${styles.tier} ${tier.bestValue ? styles.highlighted : ''}`}
            >
              {tier.bestValue && (
                <div className={styles.badge}>Best Value</div>
              )}
              <h3 className={styles.tierTitle}>{tier.name}</h3>
              <p className={styles.tierPrice}>{tier.price}</p>
              <ul className={styles.features}>
                {tier.features.map((feature, i) => (
                  <li key={i} className={styles.feature}>
                    <svg 
                      className={styles.featureIcon} 
                      viewBox="0 0 20 20"
                      fill="none" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.667 5L7.5 14.167L3.333 10"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={styles.ctaButton}>
                Get Started
              </button>
            </article>
          ))}
        </div>
        
        <div className={styles.addOns}>
          <h3 className={styles.addOnsTitle}>Add-On Services</h3>
          <div className={styles.addOnsGrid}>
            {addOns.map((addOn, index) => (
              <div key={index} className={styles.addOn}>
                <h4 className={styles.addOnName}>{addOn.name}</h4>
                <p className={styles.addOnPrice}>{addOn.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};