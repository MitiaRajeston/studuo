import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


function App() {
  // Effet pour le chargement des polices
  useEffect(() => {
    // Ajouter la police Montserrat
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Appliquer la police par défaut
    document.body.style.fontFamily = "'Montserrat', sans-serif";

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Barre de navigation */}
      <Navbar />

      {/* Sections de la page */}
      <main>
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;
