import { EquipoDirectivo } from './components/EquipoDirectivo';
import Hero from './components/Hero';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Equipo" element={<EquipoDirectivo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
