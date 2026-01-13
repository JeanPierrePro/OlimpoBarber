import React, { type FC } from 'react';
import '../../styles/sections/ourspace.css';

const OurSpace: FC = () => {
    
    // Lista de caminhos EXATOS das imagens (baseado nos teus prints)
    const images = [
        // 1. Primeira (Nota o erro ortográfico "sequnecia" que estava na pasta)
        '/espaco/primeira foto da sequnecia.webp', 
        
        // 2. Segunda (Nota o "S" maiúsculo)
        '/espaco/Segunda foto da sequencia.webp',  
        
        // 3. Terceira
        '/espaco/terceira foto da sequencia.webp',
        
        // 4. Quarta
        '/espaco/quarta foto da sequencia.webp',
        
        // 5. Quinta
        '/espaco/quinta foto da sequencia.webp',
        
        // 6. Sexta
        '/espaco/sexta foto da sequencia.webp'
    ];

    return (
        <section className="our-space-section">
            
            {/* Cabeçalho */}
            <div className="space-header">
                <h2 className="space-title">O NOSSO ESPAÇO</h2>
                
                <p className="space-subtitle">
                    Bem vindo ao nosso espaço, com linhas contemporâneas <br />
                    a casa dos Deuses, o monte Olimpo
                </p>
                
                {/* Ornamento do Centro */}
                <img 
                    src="/texture/centro.png" 
                    alt="Ornamento Grego" 
                    className="space-ornament" 
                />
            </div>

            {/* Grelha de Fotos */}
            <div className="space-grid">
                {images.map((imgSrc, index) => (
                    <div key={index} className="space-img-wrapper">
                        <img 
                            src={imgSrc} 
                            alt={`Espaço Olimpo foto ${index + 1}`} 
                            className="space-img" 
                            loading="lazy" // Boa prática para performance
                        />
                    </div>
                ))}
            </div>

        </section>
    );
};

export default OurSpace;