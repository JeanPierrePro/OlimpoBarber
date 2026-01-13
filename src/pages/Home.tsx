import { useState, useEffect, type FC } from 'react';

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

// 3. Importar os Modais
import BookingModal from '../components/modals/BookingModal';
import CookiesModal from '../components/modals/CookiesModal';
import DiscountModal from '../components/modals/DiscountModal';

const Home: FC = () => {
    // --- ESTADOS DOS MODAIS ---
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [isDiscountOpen, setIsDiscountOpen] = useState(false);

    // Timer para o Modal de Desconto
    useEffect(() => {
        // Mudei de 2000 para 10000 (10 segundos)
        // Podes ajustar para 5000 (5s) ou 15000 (15s) se preferires
        const timer = setTimeout(() => {
            setIsDiscountOpen(true);
        }, 10000); 

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Header />
      
            <main>
                {/* Hero com a função de abrir o modal de marcações */}
                <Hero onBookingClick={() => setIsBookingOpen(true)} />

                {/* Secções do site */}
                <Barbers />
                <OlimpoCoinSection />
                <Mission />
                <BeautySection />
                <OurSpace />
                <Contact />
            </main>

            <Footer />

            {/* --- MODAIS --- */}
            
            {/* 1. Modal de Marcações */}
            <BookingModal 
                isOpen={isBookingOpen} 
                onClose={() => setIsBookingOpen(false)} 
            />

            {/* 2. Modal de Cookies */}
            {/* Este gere-se sozinho, aparece se não tiver sido aceite */}
            <CookiesModal />

            {/* 3. Modal de Desconto (Aparece após 10s) */}
            <DiscountModal 
                isOpen={isDiscountOpen} 
                onClose={() => setIsDiscountOpen(false)} 
            />
        </>
    );
};

export default Home;