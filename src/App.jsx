
import Hero from './components/Hero';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { EquipoDirectivo } from './components/EquipoDirectivo';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
 
        <Navbar />
        <Hero />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/EquipoDirectivo' element={<EquipoDirectivo />} />
       
        </Routes>
      </>
  );
}

export default App;


