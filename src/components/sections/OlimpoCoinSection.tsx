import React, { type FC } from 'react';
import { Link } from 'react-router-dom'; // Para o botão funcionar
import '../../styles/sections/olimpocoin.css';

const OlimpoCoinSection: FC = () => {
    return (
        <section className="olimpo-coin-section">
            <div className="coin-container">
                
                {/* Lado Esquerdo: Botão */}
                <div className="coin-left">
                    <Link to="/olimpo-coin" className="btn-ver-mais">
                        VER MAIS...
                    </Link>
                </div>

                {/* Lado Direito: Texto */}
                <div className="coin-right">
                    <div className="coin-text-block">
                        <p>
                            Apresentamos a <span className="gold-text">OLIMPO COIN</span>
                        </p>
                        <p>
                            Inspirada no minimalismo e na elegância da Grécia Antiga, a Olimpo
                            Coin foi cuidadosamente criada para oferecer benefícios exclusivos
                            aos nossos clientes.
                        </p>
                        <p>
                            A cada corte realizado na nossa barbearia, recebes uma Olimpo Coin,
                            e a cada skin care realizada na Olimpo Skin recebes 2.
                        </p>
                        <p>
                            Com elas, podes obter descontos nas nossas t-shirts e até ganhar uma
                            gratuita.
                        </p>
                        <p>
                            Quanto mais coins acumulares, maiores serão as tuas recompensas.
                        </p>
                        
                        <p className="coin-req">
                            Requisito: Ter uma conta criada na nossa plataforma.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default OlimpoCoinSection;