// components/HeroSection/HeroSection.tsx
import styles from './HeroSection.module.css';

export const HeroSection = () => {
  return (
    <section id="home" className={`${styles.hero} min-h-screen flex items-center`}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
          Shaping <span className="text-teal-400">the Cognitive Future</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
          We create cutting-edge digital solutions that drive business growth and streamline operations.
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="#contact" 
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Get a Quote
          </a>
          <div className="mx-4 flex items-center h-full">
    <span className="h-6 w-px bg-gray-400"></span>
  </div>
          <a 
            href="#portfolio" 
            className="bg-transparent border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            See Our Work
          </a>
        </div>
      </div>
    </section>
  );
};