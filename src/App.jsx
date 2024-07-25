
import Hero from './components/Hero';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { EquipoDirectivo } from './components/EquipoDirectivo';
import { Routes, Route } from 'react-router-dom';
import Noticia from './components/Noticia';
import { EquipoAsistentes } from './components/EquipoAsistentes';
import { EquipoDocente } from './components/EquipoDocente';
import { Estamentos } from './components/Estamentos';
import { Footer } from './components/Footer';
import { Nosotros } from './components/Nosotros';
import { Contact } from './components/Contacto';
import { Noticias } from './components/Noticias';
import { NotFound } from './components/NotFound';
import Materiales from './components/Materiales';
import Evaluaciones from './components/Evaluaciones';

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
        <Route path='/Contacto' element={<Contact />} />
        <Route path='/noticia/:id' element={<Noticia />} />
        <Route path='/noticias' element={<Noticias />} />
        <Route path='/Materiales' element={<Materiales />} />
        <Route path='/Evaluaciones' element={<Evaluaciones />} />
        <Route path="*" element={<NotFound />} /> {/* Ruta para manejar 404 */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;


