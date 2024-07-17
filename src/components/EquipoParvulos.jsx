import React from "react";
import { Usuarios } from "./Usuarios";
import demoImage from '../assets/img/funcionarios/demo.png';

const docentes = [
  {
    img: demoImage,
    nombre: "Ángela España",
    correo: "aespana@liceoexperimental.cl",
    dpto: "Educación Parvularia",
    more: "Jefatura NT1A",
  },
  {
    img: demoImage,
    nombre: "Maria José Solís",
    correo: "msolis@liceoexperimental.cl",
    dpto: "Educación Parvularia",
    more: "Jefatura NT1B",
  },
  {
    img: demoImage,
    nombre: "Luz Barría",
    correo: "msolis@liceoexperimental.cl",
    dpto: "Educación Parvularia",
    more: "Jefatura NT2A",
  },
  {
    img: demoImage,
    nombre: "Teresa Cárdenas",
    correo: "tcardenas@liceoexperimental.cl",
    dpto: "Educación Parvularia",
    more: "Jefatura NT2B",
  }
];

export const EquipoParvulos = () => {
  return (
    <div className="container my-6">
      <h1 className="is-size-3 mx-6 mb-4">Educación Parvularia</h1>
      <div className="columns is-flex is-flex-wrap-wrap mx-6">
        {docentes.map((member, index) => (
          <div className="column" key={index}>
            <Usuarios
              img={member.img}
              nombre={member.nombre}
              correo={member.correo}
              dpto={member.dpto}
              more={member.more}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
