import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import Home from './pages/Home';

// Vamos deixar a Moeda desligada por agora para garantir que a Home abre
// import OlimpoCoin from './pages/OlimpoCoin'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Apenas a rota da Home ativa */}
        <Route path="/" element={<Home />} />
        
        {/* <Route path="/olimpo-coin" element={<OlimpoCoin />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;