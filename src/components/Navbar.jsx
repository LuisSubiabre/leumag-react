import React from "react";
import { Link } from "react-router-dom";
import logoImage from '../assets/img/logo11.png';
import { Button } from "./Button";
import { ModeToggle  } from "./ModeToggle";

export default function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">

      <Link className="navbar-item" to="/">
      <img src={logoImage} alt="Logo Liceo Experimental Umag" />
    <span className="has-text-weight-bold">Liceo Experimental Umag</span>
    </Link>
        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to='/' className="navbar-item">
            Inicio
          </Link>

          <a className="navbar-item">
            Documentos
          </a>

          <Link to='/Nosotros' className="navbar-item">
            Nosotros
          </Link>
                  
          <Link to='/Estamentos' className="navbar-item">
            Estamentos
          </Link>

           

          <a className="navbar-item">
            Contacto
          </a>


        </div>

        <div className="navbar-end">
          <div className="navbar-item">
          <ModeToggle />

         <Button
         title="Funcionarios"
         url="http://latium.cl/leumag/ph/funcionario/" />

        <Button
         title="Apoderados"
         url="http://latium.cl/leumag/ph/apoderados/" />
        
          </div>
        </div>
      </div>
    </nav>
  );
}