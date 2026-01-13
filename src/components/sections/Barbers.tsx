import { useState, useRef, useEffect, type FC } from 'react';
import '../../styles/sections/barbers.css'; 

interface Barber {
    id: string;
    name: string;
    localImageSrc?: string;
    role?: string;
}

const Barbers: FC = () => {
    const listRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    
    // Estados para controlar o "Agarrar e Arrastar"
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const [barbers] = useState<Barber[]>([
        { id: '1', name: 'Bernardo', role: 'Master Barber', localImageSrc: '/cabeleiros/Bernardo.webp' },
        { id: '2', name: 'João', role: 'Barber', localImageSrc: '/cabeleiros/Joao.webp' },
        { id: '3', name: 'Afonso', role: 'Barber', localImageSrc: '/cabeleiros/Afonso.webp' },
        // Dupliquei para teres scroll suficiente para testar
        { id: '4', name: 'Tiago', role: 'Barber', localImageSrc: '/cabeleiros/Tiago.webp' }, 
        { id: '5', name: 'Roberto', role: 'Barber', localImageSrc: '/cabeleiros/Roberto.webp' },
    ]);

    // --- LÓGICA DO SCROLL VISUAL (Barra Preta) ---
    const handleScroll = () => {
        if (listRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = listRef.current;
            const scrollableWidth = scrollWidth - clientWidth;
            const progress = scrollableWidth > 0 ? (scrollLeft / scrollableWidth) * 100 : 0;
            setScrollProgress(progress);
        }
    };

    useEffect(() => {
        const listElement = listRef.current;
        if (listElement) {
            listElement.addEventListener('scroll', handleScroll);
            return () => listElement.removeEventListener('scroll', handleScroll);
        }
    }, []);

    // --- LÓGICA DO ARRASTAR (DRAG) ---
    const startDragging = (e: React.MouseEvent) => {
        setIsDown(true);
        if (listRef.current) {
            setStartX(e.pageX - listRef.current.offsetLeft);
            setScrollLeft(listRef.current.scrollLeft);
        }
    };

    const stopDragging = () => {
        setIsDown(false);
    };

    const move = (e: React.MouseEvent) => {
        if (!isDown) return;
        e.preventDefault();
        if (listRef.current) {
            const x = e.pageX - listRef.current.offsetLeft;
            const walk = (x - startX) * 2; // O "* 2" é a velocidade do scroll
            listRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    return (
        <section className="barbers-section" id="barbeiros">
            <div className="container">
                <h2 className="section-title">OS NOSSOS BARBEIROS</h2>
                
                <div 
                    className="barbers-list-container" 
                    ref={listRef}
                    // Eventos do Rato para Arrastar
                    onMouseDown={startDragging}
                    onMouseLeave={stopDragging}
                    onMouseUp={stopDragging}
                    onMouseMove={move}
                >
                    {barbers.map((barber) => (
                        <div key={barber.id} className="barber-card-wrapper">
                            {/* pointer-events-none impede que a imagem seja arrastada como ficheiro */}
                            <img
                                src={barber.localImageSrc}
                                alt={barber.name}
                                className="barber-image"
                                style={{ pointerEvents: 'none' }} 
                            />
                            
                            <div className="barber-overlay"></div>
                            <div className="barber-info">
                                <h3>{barber.name}</h3>
                                <p>{barber.role || 'BARBER'}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Barra de Progresso */}
                <div className="progress-bar-container">
                    <div 
                        className="progress-bar-thumb" 
                        style={{ 
                            width: '25%', // Tamanho da barra
                            left: `${scrollProgress * 0.75}%` 
                        }} 
                    ></div>
                </div>

            </div>
        </section>
    );
};

export default Barbers;