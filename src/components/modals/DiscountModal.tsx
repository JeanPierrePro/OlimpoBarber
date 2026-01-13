import { type FC } from 'react';
import '../../styles/modals/popups.css';

interface DiscountModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const DiscountModal: FC<DiscountModalProps> = ({ isOpen, onClose }) => {
    
    if (!isOpen) return null;

    return (
        // zIndex ligeiramente menor que os cookies, ou igual
        <div className="popup-overlay" onClick={onClose} style={{ zIndex: 99990 }}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                
                <button className="popup-close-btn" onClick={onClose}>&times;</button>
                
                <h2 className="popup-title">10% de desconto</h2>
                
                <p className="popup-text">
                    Recebe um voucher de 10% de desconto para os serviços do Olimpo Skin 
                    ao registares-te na nossa plataforma.
                </p>

                <div className="popup-actions">
                    <button 
                        className="popup-btn-black" 
                        onClick={() => window.open('https://google.com', '_blank')}
                    >
                        Registo
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DiscountModal;