import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { HeroSection } from './components/HeroSection/HeroSection';
import { Services } from './components/Services/Services';
{/*import { Pricing } from './components/Pricing/Pricing'; */}
import { Portfolio } from './components/Portfolio/Portfolio';
{/* import { Testimonials } from './components/Testimonials/Testimonials'; */}
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { FAQ } from './components/FAQ/FAQ';
import { Terms } from './components/Terms/Terms';
import { Footer } from './components/Footer/Footer';

import  Topbar  from './components/Topbar/Topbar';


import './index.css';


function App() {
  return (
    <Router>
      <div className="app bg-gray-900 text-gray-100 min-h-screen">
        <Navbar />
        <Topbar />

        {/* Always rendered sections */}
        <main>
          <section id="home"><HeroSection /></section>
          <section id="services"><Services /></section>
          {/* <section id="pricing"><Pricing /></section> */}
          <section id="portfolio"><Portfolio /></section>
          {/* < section id="testimonials"><Testimonials /></section> */}
          <section id="about"><About /></section>
          <section id="contact"><Contact /></section>
          <section id="faq"><FAQ /></section>
        </main>

        {/* Only route-based rendering */}
        <Routes>
          <Route path="/terms" element={<Terms fullVersion={true} />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
