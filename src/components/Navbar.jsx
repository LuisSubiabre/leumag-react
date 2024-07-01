import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">


        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">
            Inicio
          </a>

          <a className="navbar-item">
            Documentation
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              Nosotros
            </a>

            <div className="navbar-dropdown">
              <a className="navbar-item">
                Saludo Director
              </a>
              <a className="navbar-item is-selected">
                Misión & Visión
              </a>
              <a className="navbar-item">
                Dependencias
              </a>
            </div>
          </div>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              Estamentos
            </a>

            <div className="navbar-dropdown">
              <a className="navbar-item">
                Equipo Directivo
              </a>
              <a className="navbar-item is-selected">
                Docentes
              </a>
              <a className="navbar-item">
                Asistentes de la educación
              </a>
            </div>
          </div>

          <a className="navbar-item">
            Contacto
          </a>


        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}