import styles from './Terms.module.css';

export const Terms = ({ fullVersion = false }: { fullVersion?: boolean }) => {
  return (
    <section id="terms" className={styles.terms}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-white">Terms and Conditions</h2>
        
        {fullVersion ? (
          <>
            <h3 className="text-2xl font-bold mb-4 text-teal-400">1. General Terms</h3>
            <p>
              By accessing and using our services, you accept and agree to be bound by these Terms. If you do not agree, you must not use our services.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 mt-8 text-teal-400">2. Services</h3>
            <p>
              We provide digital services including but not limited to web development, digital marketing, and automation solutions. All services are provided "as is" without warranties of any kind.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 mt-8 text-teal-400">3. Payments</h3>
            <p>
              Payment terms are outlined in individual project proposals. Typically, we require a 50% deposit to begin work, with the balance due upon completion.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 mt-8 text-teal-400">4. Intellectual Property</h3>
            <p>
              All original materials created by us remain our property until full payment is received. Upon final payment, ownership transfers to the client.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 mt-8 text-teal-400">5. Limitation of Liability</h3>
            <p>
              Our liability is limited to the amount paid for services. We are not liable for indirect, incidental, or consequential damages.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 mt-8 text-teal-400">6. Changes to Terms</h3>
            <p>
              We reserve the right to modify these terms at any time. Continued use of services constitutes acceptance of the modified terms.
            </p>
          </>
        ) : (
          <>
            <p className="mb-6">
              By using our services, you agree to our Terms and Conditions. Below is a summary of key points:
            </p>
            
            <ul className="mb-6">
              <li>• 50% deposit required to begin work</li>
              <li>• Ownership transfers upon final payment</li>
              <li>• Limited liability as outlined in full terms</li>
              <li>• We reserve the right to modify terms</li>
            </ul>
            
            <p>
              <a href="/terms" className="text-teal-400 hover:underline">View full Terms and Conditions</a>
            </p>
          </>
        )}
      </div>
    </section>
  );
};