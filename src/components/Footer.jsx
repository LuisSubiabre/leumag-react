import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer is-link has-text-primary-light footer-bg">
      <section className="container px-6">
        <div className="content has-text-white">
          <div className="container is-flex">
            <div className="columns is-size-7">
              <div className="column is-full">
                <p className="has-text-weight-semibold has-text-warning">Establecimiento Educacional</p>
                <p><i className="fas fa-map-marker-alt"></i> Angamos 17, Punta Arenas, Chile</p>
                <p><i className="fas fa-phone"></i> 61 2454270</p>
                <p><i className="fas fa-envelope"></i> leumag@liceoexperimental.cl</p>
              </div>

              <div className="column is-full">
                <p className="has-text-weight-semibold has-text-warning">Administración & Finanzas</p>
                <p><i className="fas fa-map-marker-alt"></i> Angamos 131, Punta Arenas, Chile</p>
                <p><i className="fas fa-phone"></i> 61 2240075</p>
                <p><i className="fas fa-envelope"></i> administracion@liceoexperimental.cl</p>
              </div>

              <div className="column is-full">
                <p className="has-text-weight-semibold has-text-warning">Enlaces</p>
                <p><i className="fas fa-home"></i> <Link to="/Home" className="has-text-white">Inicio</Link > </p>
                <p><i className="fas fa-school"></i> <Link to="/Nosotros" className="has-text-white">Nosotros</Link > </p>
                <p><i className="fas fa-user-friends"></i> <Link to="/Estamentos" className="has-text-white">Estamentos</Link > </p>
                <p><i className="fas fa-id-card"></i> <Link to="/Contacto" className="has-text-white">Contacto</Link > </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
