import React from 'react';

// 1. Importar Header e Footer
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

// 2. Importar as Secções
import Hero from '../components/sections/Hero';
import Mission from '../components/sections/Mission';
import Barbers from '../components/sections/Barbers';
import Contact from '../components/sections/Contact';
import OlimpoCoinSection from '../components/sections/OlimpoCoinSection';
import BeautySection from '../components/sections/BeautySection';
import OurSpace from '../components/sections/OurSpace';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      
      <main>
        <Hero />
        <Barbers />
        <OlimpoCoinSection />
        <Mission />
        <BeautySection />
        <OurSpace />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default Home;