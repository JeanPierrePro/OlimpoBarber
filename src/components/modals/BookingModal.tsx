import React, { useState } from 'react';
import '../../styles/modals/booking.css';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    
    // Estados de seleção
    const [selectedBarber, setSelectedBarber] = useState<any>(null);
    const [selectedService, setSelectedService] = useState<any>(null);
    const [selectedDate, setSelectedDate] = useState<string>("");
    const [selectedTime, setSelectedTime] = useState<string>("");
    
    // Formulário
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    if (!isOpen) return null;

    // --- DADOS DOS BARBEIROS (ATUALIZADOS) ---
    const barbers = [
        { id: 1, name: 'Robert Simon', role: 'Barbeiro', img: '/cabeleiros/Roberto.webp' },
        { id: 2, name: 'João Pereira', role: 'Barbeiro', img: '/cabeleiros/Joao.webp' },
        { id: 3, name: 'Afonso Bento', role: 'Barbeiro', img: '/cabeleiros/Afonso.webp' },
        { id: 4, name: 'Tiago Antunes', role: 'Barbeiro', img: '/cabeleiros/Tiago.webp' },
        { id: 5, name: 'Bernardo B.', role: 'Barbeiro', img: '/cabeleiros/Bernardo.webp' },
    ];

    // --- DADOS DOS SERVIÇOS ---
    const services = [
        { id: 1, name: 'Corte simples', price: '15€', icon: '/icons/cortes/corte simples.png' },
        { id: 2, name: 'Corte e barba', price: '20€', icon: '/icons/cortes/corte e barba.png' },
        { id: 3, name: 'Barba', price: '10€', icon: '/icons/cortes/barba.png' },
        { id: 4, name: 'Disfarce', price: '15€', icon: '/icons/cortes/disfarce.png' },
    ];

    const timeSlots = ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:30", "13:00"];

    // --- LÓGICA DE NAVEGAÇÃO ---
    const handleNext = () => {
        if (step === 1 && !selectedBarber) return alert("Selecione um barbeiro ou 'Sem preferência'");
        if (step === 2 && !selectedService) return alert("Selecione um serviço");
        if (step === 3 && (!selectedDate || !selectedTime)) return alert("Selecione data e hora");
        setStep(step + 1);
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleConfirm = () => {
        setStep(5);
    };

    // --- PASSO 1: BARBEIROS ---
    const renderStep1 = () => (
        <>
            <h3 className="step-title">Escolhe o teu barbeiro</h3>
            
            {/* Scroll Horizontal */}
            <div className="options-grid">
                {barbers.map(barber => (
                    <div 
                        key={barber.id} 
                        className={`option-card ${selectedBarber?.id === barber.id ? 'selected' : ''}`}
                        onClick={() => setSelectedBarber(barber)}
                    >
                        {/* Imagem redonda do barbeiro */}
                        <img src={barber.img} alt={barber.name} className="option-img-circle" />
                        <span className="option-name">{barber.name}</span>
                        <span className="option-sub">{barber.role}</span>
                    </div>
                ))}
            </div>
            
            {/* Botão Sem Preferência */}
            <div className="no-pref-container">
                <button 
                    className="no-pref-btn" 
                    onClick={() => { 
                        setSelectedBarber({ name: 'Sem preferência', img: '/icons/cortes/bloqueio.png' }); 
                        handleNext(); 
                    }}
                >
                    <img src="/icons/cortes/bloqueio.png" alt="Bloqueio" className="btn-icon-small" />
                    Sem preferência
                </button>
            </div>
        </>
    );

    // --- PASSO 2: SERVIÇOS ---
    const renderStep2 = () => (
        <>
            <h3 className="step-title">Escolhe o teu corte</h3>
            <div className="options-grid">
                {services.map(service => (
                    <div 
                        key={service.id} 
                        className={`option-card ${selectedService?.id === service.id ? 'selected' : ''}`}
                        onClick={() => setSelectedService(service)}
                    >
                        <img src={service.icon} alt={service.name} className="option-img-circle service-icon" />
                        <span className="option-name">{service.name}</span>
                        <span className="option-sub">{service.price}</span>
                    </div>
                ))}
            </div>
        </>
    );

    // --- PASSO 3: CALENDÁRIO ---
    const renderStep3 = () => (
        <>
            <h3 className="step-title">Agenda o teu corte</h3>
            <div className="date-time-container">
                <div className="calendar-wrapper">
                    <div style={{textAlign:'center', fontWeight:'bold', marginBottom:'10px'}}>Julho 2025</div>
                    <div className="calendar-grid">
                        {['S','T','Q','Q','S','S','D'].map(d => <span key={d} style={{fontWeight:'bold'}}>{d}</span>)}
                        {Array.from({length: 31}, (_, i) => i + 1).map(day => (
                            <div 
                                key={day} 
                                className={`cal-day ${selectedDate === `2025-07-${day}` ? 'active' : ''} ${day < 21 ? 'disabled' : ''}`}
                                onClick={() => day >= 21 && setSelectedDate(`2025-07-${day}`)}
                            >
                                {day}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="time-wrapper">
                    <div className="time-grid">
                        {timeSlots.map(time => (
                            <div 
                                key={time} 
                                className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                                onClick={() => setSelectedTime(time)}
                            >
                                {time}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );

    // --- PASSO 4: FORMULÁRIO ---
    const renderStep4 = () => (
        <>
            <h3 className="step-title">Confirma a a tua marcação</h3>
            
            <div className="summary-card">
                <div className="summary-text">
                    <h4>{selectedService?.name || "Serviço"}</h4>
                    <p>{selectedBarber?.name}</p>
                    <small>{selectedDate} às {selectedTime}</small>
                </div>
                <img src={selectedService?.icon || selectedBarber?.img} alt="Resumo" className="summary-avatar" />
            </div>

            <div className="form-group">
                <label>Nome</label>
                <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Nome e sobrenome"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
            </div>
            <div className="form-group">
                <label>E-Mail</label>
                <input 
                    type="email" 
                    className="form-input" 
                    placeholder="oseu@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
            </div>
            <div className="form-group">
                <label>Número de telemóvel</label>
                <input 
                    type="tel" 
                    className="form-input" 
                    placeholder="912345678"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
            </div>
        </>
    );

    // --- PASSO 5: SUCESSO ---
    const renderSuccess = () => (
        <div className="success-content">
            <h3 className="step-title">MARCAÇÕES</h3>
            <p style={{fontSize: '1.2rem'}}>Marcação registada.</p>
            <span className="thank-you">Obrigado!</span>
            
            <div className="check-icon">✓</div>
            
            <div className="summary-card" style={{marginTop: '20px', width: '100%'}}>
                <div className="summary-text">
                    <h4>{selectedService?.name}</h4>
                    <p>{selectedBarber?.name}</p>
                    <small>{selectedDate} às {selectedTime}</small>
                </div>
                <img src={selectedService?.icon} alt="Resumo" className="summary-avatar" />
            </div>

            <button className="btn-confirm" onClick={onClose} style={{marginTop:'30px'}}>
                Sair
            </button>
        </div>
    );

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="btn-close" onClick={onClose}>&times;</button>
                
                {step < 5 && (
                    <>
                        <div className="modal-header">
                            {step > 1 && <button className="btn-back" onClick={handleBack}>←</button>}
                            <h2 className="modal-title">MARCAÇÕES</h2>
                        </div>
                        <div className="progress-container">
                            <span className="step-indicator">{step}/4</span>
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: `${step * 25}%` }}></div>
                            </div>
                        </div>
                    </>
                )}

                <div className="modal-body" style={{overflowY: 'auto', flex: 1}}>
                    {step === 1 && renderStep1()}
                    {step === 2 && renderStep2()}
                    {step === 3 && renderStep3()}
                    {step === 4 && renderStep4()}
                    {step === 5 && renderSuccess()}
                </div>

                {step < 4 && (
                    <div className="modal-footer">
                        <button className="btn-next" onClick={handleNext}>Seguinte</button>
                    </div>
                )}
                {step === 4 && (
                    <div className="modal-footer">
                        <button className="btn-confirm" onClick={handleConfirm}>Confirmar</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookingModal;