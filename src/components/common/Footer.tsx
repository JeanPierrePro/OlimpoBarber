import React, { type FC } from 'react';
import '../../styles/footer.css'; // Verifica se o caminho está certo

const Footer: FC = () => {
    return (
        <footer className="site-footer">
            <div className="footer-container">
                
                {/* --- COLUNA ESQUERDA: Marca, Pagamentos, Social --- */}
                <div className="footer-brand-col">
                    <h2 className="footer-logo">OLIMPO</h2>
                    
                    {/* Ícones de Pagamento */}
                    <div className="payment-icons">
                        <img src="/icons/payshop.png" alt="Payshop" className="pay-icon" />
                        <img src="/icons/multibanco.png" alt="Multibanco" className="pay-icon" />
                        <img src="/icons/mbway.png" alt="MB Way" className="pay-icon" />
                    </div>

                    {/* Redes Sociais */}
                    <div className="social-area">
                        <p>Estamos onde tu estás.</p>
                        <a 
                            href="https://instagram.com" 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            <img 
                                src="/icons/instagram.png" 
                                alt="Instagram" 
                                className="social-icon" 
                            />
                        </a>
                    </div>
                </div>

                {/* --- COLUNA MEIO: Informações Legais --- */}
                <div className="footer-links-col">
                    <h3>Informações Legais</h3>
                    <ul>
                        <li><a href="#">política e privacidade</a></li>
                        <li><a href="#">termos e condições</a></li>
                        <li><a href="#">política de cookies</a></li>
                    </ul>
                </div>

                {/* --- COLUNA DIREITA: Apoio ao cliente --- */}
                <div className="footer-links-col">
                    <h3>Apoio ao cliente</h3>
                    <ul>
                        <li><a href="#">ajuda</a></li>
                        {/* Podes adicionar mais links aqui se quiseres */}
                    </ul>
                </div>

            </div>
        </footer>
    );
};

export default Footer;