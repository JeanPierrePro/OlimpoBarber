import { useState, useEffect, type FC } from 'react';
import '../../styles/sections/hero.css';

// 1. Definimos que o Hero aceita uma função chamada 'onBookingClick'
interface HeroProps {
    onBookingClick?: () => void;
}

// 2. Recebemos essa função (prop) aqui
const Hero: FC<HeroProps> = ({ onBookingClick }) => {
    
    // Estado APENAS para rodar as imagens de fundo
    const [currentImage, setCurrentImage] = useState(1);

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
                
                {/* 3. Quando clicas, executa a função que veio do Home.tsx */}
                <button 
                    className="hero-booking-button" 
                    onClick={onBookingClick}
                >
                    MARCAÇÕES
                </button>
            </div>
            
        </section>
    );
};

export default Hero;