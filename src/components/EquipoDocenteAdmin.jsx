import React from "react";
import { Usuarios } from "./Usuarios";
import demoImage from '../assets/img/funcionarios/demo.png';

const docentes = [
  {
    img: demoImage,
    nombre: "Janet Valdés",
    correo: "jvaldes@liceoexperimental.cl",
    dpto: "Coordinación CRA",
    more: "",
  },
  {
    img: demoImage,
    nombre: "Maria Cecilia Alvarado",
    correo: "mcalvarado@liceoexperimental.cl",
    dpto: "Asistente U.T.P. Ens. Básica",
    more: "",
  },
  {
    img: demoImage,
    nombre: " Carlos Araneda ",
    correo: "caraneda@liceoexperimental.cl",
    dpto: "Asistente U.T.P. Ens. Básica",
    more: "",
  },
  {
    img: demoImage,
    nombre: "Mariana López",
    correo: "mlopez@liceoexperimental.cl",
    dpto: "Asistente U.T.P. Ens. Media",
    more: "",
  },
  {
    img: demoImage,
    nombre: "Jorge Trujillo",
    correo: "jtrujillo@liceoexperimental.cl",
    dpto: "Asistente U.T.P. Ens. Media",
    more: "",
  },
  {
    img: demoImage,
    nombre: "Priscila Lemus",
    correo: "plemus@liceoexperimental.cl",
    dpto: "Coordinación ACLE",
    more: "",
  }
  ,
  {
    img: demoImage,
    nombre: "Luis Subiabre",
    correo: "lsubiabre@liceoexperimental.cl",
    dpto: "Coordinación Tecnológica",
    more: "",
  }
];

export const EquipoDocenteAdmin = () => {
  return (
    <div className="container my-6">

      <h1 className="is-size-3 mx-6 mb-4">Docentes Administrativos</h1>
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
