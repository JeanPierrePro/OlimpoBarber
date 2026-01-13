import React, { type FC } from 'react';
import '../../styles/sections/contact.css';

const Contact: FC = () => {
    return (
        <section className="contact-section" id="contactos">
            
            {/* Cabeçalho */}
            <div className="contact-header">
                <h2 className="contact-title">CONTACTA-NOS</h2>
                <p className="contact-subtitle">
                    Estamos aqui para responder às suas questões <br />
                    e agendar o seu próximo corte.
                </p>
            </div>

            <div className="contact-container">
                
                {/* LADO ESQUERDO: Lista de Contactos */}
                <div className="contact-info-list">
                    
                    {/* ITEM 1: Localização */}
                    <div className="contact-item">
                        <img src="/icons/localisacao.png" alt="Localização" className="contact-icon" />
                        <div className="contact-details">
                            <h3>Localização</h3>
                            <p>Rua Júlio Queijeiro 20</p>
                            <p>2005-403</p>
                            <p>Portugal</p>
                        </div>
                    </div>

                    {/* ITEM 2: Telefone */}
                    <div className="contact-item">
                        <img src="/icons/telefone.png" alt="Telefone" className="contact-icon" />
                        <div className="contact-details">
                            <h3>Telefone</h3>
                            <p>+351 926 967 332</p>
                            <p style={{ fontSize: '0.85rem', color: '#666' }}>
                                Chamadas e SMS (horário de funcionamento)
                            </p>
                        </div>
                    </div>

                    {/* ITEM 3: E-mail */}
                    <div className="contact-item">
                        <img src="/icons/gmail.png" alt="Email" className="contact-icon" />
                        <div className="contact-details">
                            <h3>E-mail</h3>
                            <p>olimpobarber@gmail.com</p>
                            <p style={{ fontSize: '0.85rem', color: '#666' }}>
                                Respondemos em 24h
                            </p>
                        </div>
                    </div>

                    {/* ITEM 4: Horário */}
                    <div className="contact-item">
                        <img src="/icons/horas.png" alt="Horário" className="contact-icon" />
                        <div className="contact-details">
                            <h3>Horário de funcionamento</h3>
                            <p><strong>Segunda a Sexta:</strong> 9:00 - 20:00</p>
                            <p><strong>Sábado:</strong> 9:00 - 18:00</p>
                            <p><strong>Domingo:</strong> Encerrado</p>
                        </div>
                    </div>

                </div>

                {/* LADO DIREITO: Imagem do Mapa */}
                <div className="contact-map-wrapper">
                    {/* Link opcional para abrir no Google Maps se quiseres no futuro */}
                    <a 
                        href="https://www.google.com/maps" 
                        target="_blank" 
                        rel="noreferrer"
                        title="Abrir no Google Maps"
                    >
                        <img 
                            src="/texture/olimpomap.png" 
                            alt="Mapa Olimpo Barber" 
                            className="contact-map-img" 
                        />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Contact;