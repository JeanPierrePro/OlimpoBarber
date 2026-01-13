import React, { type FC } from 'react';
import '../../styles/header.css'; 

const Header: FC = () => {
    return (
        <header className="site-header">
            <div className="header-container">
                
                {/* 1. LOGOTIPO (Esquerda) */}
                <a href="/" className="header-logo">
                    OLIMPO
                </a>

                {/* NOTA: Removi o menu de texto (Home, Barbeiros...) como pediste */}

                {/* 2. ÍCONES (Direita) */}
                <div className="header-icons-area">
                    
                    {/* Ícone 1: Whitecoin */}
                    <a href="#" target="_blank" rel="noreferrer" className="icon-link" title="Olimpo Coin">
                        <img 
                            src="/icons/whitecoin.png" 
                            alt="Olimpo Coin" 
                            className="header-icon-img" 
                        />
                    </a>

                    {/* Ícone 2: Navegação / Loja */}
                    <a href="#" target="_blank" rel="noreferrer" className="icon-link" title="Loja">
                        <img 
                            src="/icons/icone de nevegacao do waer.png" 
                            alt="Navegação" 
                            className="header-icon-img" 
                        />
                    </a>

                    {/* Ícone 3: Perfil */}
                    <a href="#" className="icon-link" title="Minha Conta">
                        <img 
                            src="/icons/perfil.png" 
                            alt="Perfil" 
                            /* Adicionei a classe profile-icon caso precises de inverter a cor no CSS */
                            className="header-icon-img profile-icon" 
                        />
                    </a>

                </div>

            </div>
        </header>
    );
};

export default Header;