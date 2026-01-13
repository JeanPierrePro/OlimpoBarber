import { useState, useEffect, type FC } from 'react';
import '../../styles/modals/popups.css';

const CookiesModal: FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // --- LIMPEZA DE TESTE (Descomenta a linha abaixo se o popup não aparecer) ---
        // localStorage.removeItem('olimpoCookiesAccepted'); 

        // 1. Verifica se o utilizador já aceitou ou rejeitou antes
        const cookiesAccepted = localStorage.getItem('olimpoCookiesAccepted');
        
        // 2. Se NÃO houver registo (é a primeira vez), mostra o popup
        if (!cookiesAccepted) {
            setIsVisible(true);
        }
        
        // --- MODO FORÇADO (Para veres o design agora) ---
        // Se quiseres que apareça SEMPRE enquanto estás a desenhar, 
        // mantém a linha abaixo descomentada:
        setIsVisible(true); 

    }, []);

    const handleDecision = (decision: boolean) => {
        // Guarda a decisão no navegador do utilizador
        localStorage.setItem('olimpoCookiesAccepted', decision.toString());
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="popup-overlay" style={{ zIndex: 99999 }}> {/* Z-index extra alto */}
            <div className="popup-content">
                <button className="popup-close-btn" onClick={() => setIsVisible(false)}>&times;</button>
                
                <h2 className="popup-title">Política de cookies</h2>
                
                <p className="popup-text">
                    Ao clicar em "Aceitar todos os cookies", você concorda com o armazenamento de 
                    cookies no seu dispositivo para melhorar a navegação no site, analisar o uso do site e 
                    ajudar em nossos esforços de marketing.
                </p>

                <div className="popup-actions">
                    <button className="popup-btn-black" onClick={() => handleDecision(true)}>
                        Aceitar todos os cookies
                    </button>
                    <button className="popup-btn-black" onClick={() => handleDecision(false)}>
                        Rejeitar todos
                    </button>
                </div>

                <a href="#" className="popup-link">Política de cookies</a>
            </div>
        </div>
    );
};

export default CookiesModal;