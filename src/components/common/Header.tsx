import { type FC } from 'react';
import '../../styles/header.css'; 

const Header: FC = () => {
    return (
        <header className="site-header">
            <div className="header-container">
                
                {/* 1. LOGOTIPO */}
                <a href="/" className="header-logo">
                    OLIMPO
                </a>

                {/* 2. ÍCONES COM TEXTO */}
                <div className="header-icons-area">
                    
                    {/* --- Ícone 1: Olimpo Skin (Moeda Branca/Feminina) --- */}
                    <a 
                        href="https://www.youtube.com/watch?v=P4XwCqbKFqk&list=RDXHR_HsCCP3s&index=5"
                        target="_blank" 
                        rel="noreferrer" 
                        className="icon-link" 
                        title="Olimpo Skin"
                    >
                        <img 
                            src="/icons/whitecoin.png" 
                            alt="Olimpo Skin" 
                            className="header-icon-img" 
                        />
                        <span className="icon-text">OLIMPO SKIN</span>
                    </a>

                    {/* --- Ícone 2: Olimpo Wear (Moeda Amarela/Masculina) --- */}
                    <a 
                        href="https://www.youtube.com/watch?v=P4XwCqbKFqk&list=RDXHR_HsCCP3s&index=5"
                        target="_blank" 
                        rel="noreferrer" 
                        className="icon-link" 
                        title="Olimpo Wear"
                    >
                        <img 
                            src="/icons/icone de nevegacao do waer.png" 
                            alt="Olimpo Wear" 
                            className="header-icon-img" 
                        />
                        <span className="icon-text">OLIMPO WEAR</span>
                    </a>

                    {/* --- Ícone 3: Perfil (Sem texto, só ícone) --- */}
                    <a 
                        href="#" 
                        target="_blank"
                        rel="noreferrer"
                        className="icon-link" 
                        title="Minha Conta"
                    >
                        <img 
                            src="/icons/perfil.png" 
                            alt="Perfil" 
                            className="header-icon-img profile-icon" 
                        />
                        {/* Se quiseres texto no perfil também, descomenta abaixo: */}
                        {/* <span className="icon-text">CONTA</span> */}
                    </a>

                </div>

            </div>
        </header>
    );
};

export default Header;