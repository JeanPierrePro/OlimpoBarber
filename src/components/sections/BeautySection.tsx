import React, { type FC } from 'react';
import '../../styles/sections/beauty.css';

const BeautySection: FC = () => {
    return (
        <section className="beauty-section">
            
            {/* --- Decoração dos Cantos --- */}
            {/* Nota: Mantive o nome "esquero" conforme o teu print da pasta */}
            <img 
                src="/texture/canto superior esquero.png" 
                alt="Decoração Canto" 
                className="corner-deco corner-top-left" 
            />
            
            <img 
                src="/texture/canto inferior direito.png" 
                alt="Decoração Canto" 
                className="corner-deco corner-bottom-right" 
            />

            {/* --- Conteúdo --- */}
            <div className="beauty-container">
                
                {/* Texto */}
                <div className="beauty-text">
                    <h2 className="beauty-title">A BELEZA DO OLIMPO</h2>
                    
                    <p>
                        A nossa barbearia nasce de um conceito singular: 
                        unir a excelência do cuidado masculino à grandeza 
                        intemporal da Grécia Antiga. Não somos apenas 
                        uma barbearia — somos um templo moderno onde 
                        a arte da estética é elevada à nobreza de um ritual 
                        clássico.
                    </p>
                    
                    <span className="beauty-highlight">
                        Seja bem-vindo à verdadeira arte de cuidar de si, 
                        como um deus grego nos tempos de hoje.
                    </span>
                </div>

                {/* Imagem (ROACH) */}
                <div className="beauty-image-wrapper">
                    <img 
                        src="/texture/ROACH.webp" 
                        alt="Livro Roach e Estátua Grega" 
                        className="beauty-image" 
                    />
                </div>

            </div>
        </section>
    );
};

export default BeautySection;