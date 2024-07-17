import React from "react";
import { Usuarios } from "./Usuarios";
import demoImage from '../assets/img/funcionarios/demo.png';
import pbravo from '../assets/img/funcionarios/pbravo.png';
import ifigueroa from '../assets/img/funcionarios/ifigueroa.png';
import jvasquez from '../assets/img/funcionarios/jvasquez.png';
import fhinojosa from '../assets/img/funcionarios/fhinojosa.png';
import mmansilla from '../assets/img/funcionarios/mmansilla.png';
import moyarzun from '../assets/img/funcionarios/moyarzun.png';

const equipoDirectivo = [
  {
    img: pbravo,
    nombre: "Patricio Bravo",
    correo: "pbravo@liceoexperimental.cl",
    dpto: "Director"
  },
  {
    img: ifigueroa,
    nombre: "Iván Figueroa",
    correo: "ifigueroa@liceoexperimental.cl",
    dpto: "Inspector General"
  },
  {
    img: jvasquez,
    nombre: "Jorge Vásquez",
    correo: "jvasquez@liceoexperimental.cl",
    dpto: "U.T.P. Ens. Básica"
  },
  {
    img: fhinojosa,
    nombre: "Francisco Hinojosa",
    correo: "fhinojosa@liceoexperimental.cl",
    dpto: "U.T.P. Ens. Media"
  },
  {
    img: mmansilla,
    nombre: "Maribel Mansilla",
    correo: "mmansilla@liceoexperimental.cl",
    dpto: "Orientadora Ens. Básica"
  },
  {
    img: moyarzun,
    nombre: "Mavis Oyarzún",
    correo: "moyarzun@liceoexperimental.cl",
    dpto: "Orientadora Ens. Media"
  }
];

export const EquipoDirectivo = () => {
  return (
    <>

      <h1 className="is-size-3 mx-6 mb-4">Directivos</h1>
      <div className="columns is-flex is-flex-wrap-wrap mx-6">
        {equipoDirectivo.map((member, index) => (
          <div className="column" key={index}>
            <Usuarios
              img={member.img}
              nombre={member.nombre}
              correo={member.correo}
              dpto={member.dpto}
            />
          </div>
        ))}
      </div>
    </>
  );
};
