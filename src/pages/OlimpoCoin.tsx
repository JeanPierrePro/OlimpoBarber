import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/common/Header';
import CoinInfoTabs from '../components/sections/CoinInfoTabs';
// import InteractiveCoin3D from '../components/3d/InteractiveCoin3D'; // Descomenta quando tiveres o arquivo

const OlimpoCoin: React.FC = () => {
    return (
        <>
            <Header />
            <div className="page-coin-container" style={{paddingTop: '20px', backgroundColor: '#111', minHeight: '100vh', color: '#fff'}}>
                
                {/* Botão Voltar / Logo */}
                <div className="container" style={{marginBottom: '40px'}}>
                     <Link to="/" style={{color: '#C5A059'}}>← Voltar ao Início</Link>
                </div>

                {/* Área da Moeda 3D */}
                <div style={{height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    {/* <InteractiveCoin3D /> */}
                    <img src="/images/moeda-placeholder.png" alt="Moeda 3D" style={{maxHeight: '200px'}} />
                </div>

                {/* Abas de Informação */}
                <div className="container">
                    <CoinInfoTabs />
                </div>
            </div>
        </>
    );
};

export default OlimpoCoin;