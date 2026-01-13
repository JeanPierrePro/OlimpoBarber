import { useState, useRef, type FC } from 'react';
import '../../styles/sections/mission.css'; 

const Mission: FC = () => {
    // Referência para controlar o vídeo
    const videoRef = useRef<HTMLVideoElement>(null);
    // Estado para saber se está a tocar ou parado
    const [isPlaying, setIsPlaying] = useState(false);

    // Função que alterna Play/Pause
    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    return (
        <section className="mission-section">
            <div className="mission-container">
                
                {/* Lado Esquerdo: Texto */}
                <div className="mission-text">
                    <h2>
                        A NOSSA <br/>
                        <span>MISSÃO</span>
                    </h2>
                    <p>
                        A Olimpo Barbershop é mais do que um corte, é uma experiência 
                        pensada para o homem moderno, onde tradição e estilo se fundem 
                        num espaço autêntico e único. Aqui, cada detalhe importa – do 
                        atendimento ao ambiente – criando um momento exclusivo, 
                        confortável e marcante. Não se trata apenas de aparência, 
                        mas de identidade, confiança e expressão pessoal através de um bom corte.
                    </p>
                </div>
                
                {/* Lado Direito: Vídeo Manual */}
                <div className="mission-video">
                    {/* O clique na caixa ativa o vídeo */}
                    <div className="mission-media-wrapper" onClick={togglePlay}>
                        
                        <video 
                            ref={videoRef}
                            className="responsive-video" 
                            width="100%"
                            height="100%"
                            playsInline // Essencial para iPhone
                            
                            // Quando o vídeo acaba, volta a mostrar o botão play
                            onEnded={() => setIsPlaying(false)}
                            
                            // Nota: Removi o "muted" para teres som. 
                            // Se o vídeo tiver som muito alto, podes querer voltar a por muted={true}
                        >
                            <source src="/video/Canavarro.webm" type="video/webm" />
                            Seu navegador não suporta vídeos.
                        </video>

                        {/* Botão Dourado (Só aparece se NÃO estiver a tocar) */}
                        {!isPlaying && (
                            <div className="video-overlay-btn"></div>
                        )}

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Mission;