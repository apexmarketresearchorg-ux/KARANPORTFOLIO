import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Process from './components/Process';
import TradeDemos from './components/TradeDemos';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-dark-200 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <TradeDemos />
      <Skills />
      <Process />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
