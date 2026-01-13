import React, { useState, useEffect, type FC } from 'react';
import '../../styles/sections/hero.css';

// 1. IMPORTANTE: Importar o Modal que criámos
import BookingModal from '../modals/BookingModal';

const Hero: FC = () => {
    // Estado para rodar as imagens de fundo
    const [currentImage, setCurrentImage] = useState(1);
    
    // 2. IMPORTANTE: Estado para controlar se o Modal está aberto ou fechado
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    // Roda as imagens de fundo a cada 5 segundos
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev === 3 ? 1 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className={`hero-section bg-image-${currentImage}`} id="home">
            
            <div className="dark-overlay"></div>

            <div className="hero-content">
                <h1 className="hero-title">Where Gods are made</h1>
                
                {/* 3. IMPORTANTE: O botão agora tem o onClick para abrir o modal */}
                <button 
                    className="hero-booking-button" 
                    onClick={() => {
                        console.log("Botão clicado!"); // Para testar se aparece no console
                        setIsBookingOpen(true);
                    }}
                >
                    MARCAÇÕES
                </button>
            </div>

            {/* 4. IMPORTANTE: O Modal em si (invisível até clicares no botão) */}
            {/* Certifica-te que o ficheiro BookingModal.tsx existe na pasta src/components/modals/ */}
            <BookingModal 
                isOpen={isBookingOpen} 
                onClose={() => setIsBookingOpen(false)} 
            />

        </section>
    );
};

export default Hero;