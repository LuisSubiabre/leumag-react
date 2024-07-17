
import Hero from './components/Hero';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { EquipoDirectivo } from './components/EquipoDirectivo';
import { Link, Routes, Route } from 'react-router-dom';
import Noticia from './components/Noticia';
import { EquipoAsistentes } from './components/EquipoAsistentes';
import { EquipoDocente } from './components/EquipoDocente';
import { Estamentos } from './components/Estamentos';
import { Footer } from './components/Footer';
import { Nosotros } from './components/Nosotros';

function App() {
  return (
    <>
 
        <Navbar />
        <Hero />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Nosotros' element={<Nosotros />} />
          <Route path='/Directivos' element={<EquipoDirectivo />} />
          <Route path='/Docentes' element={<EquipoDocente />} />
          <Route path='/Asistentes' element={<EquipoAsistentes />} />
          <Route path='/Estamentos' element={<Estamentos />} />
          <Route path='/noticia/:id' element={<Noticia />} />
        </Routes>
        <Footer />
      </>
  );
}

export default App;


