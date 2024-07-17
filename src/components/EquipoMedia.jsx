import React from "react";
import { Usuarios } from "./Usuarios";
import demoImage from '../assets/img/funcionarios/demo.png';


const docentes = [
  {
    img: demoImage,
    nombre: "Manuel Cisternas Williams",
    correo: "mcisternas@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "—",
    asignatura: "Biología – Ciencias para la Ciudadanía – FD Biología Celular y Molecular – FD Biología de los Ecosistemas"
  },
  {
    img: demoImage,
    nombre: "Alejandra Rivas Diaz",
    correo: "arivas@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 3° C",
    asignatura: "Química – Ciencias para la Ciudadanía – Ciencias de la Salud – FD Química"
  },
  {
    img: demoImage,
    nombre: "Samy Letricia Aránguiz Aránguiz",
    correo: "saranguiz@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 1° B",
    asignatura: "Lengua y Literatura – Taller de Literatura"
  },
  {
    img: demoImage,
    nombre: "Paula Belén Barría Barría",
    correo: "pbarria@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 2° A",
    asignatura: "Lengua y Literatura – Teatro – Simce"
  },
  {
    img: demoImage,
    nombre: "Alex Cancino Vásquez",
    correo: "acancino@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 2° B",
    asignatura: "Matemática"
  },
  {
    img: demoImage,
    nombre: "Romina Alejandra Bahamonde Galli",
    correo: "rbahamonde@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 3° B",
    asignatura: "Educación Física y Salud"
  },
  {
    img: demoImage,
    nombre: "Josué Toro Ojeda",
    correo: "jtoro@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 2° C",
    asignatura: "Historia – Filosofía"
  },
  {
    img: demoImage,
    nombre: "Milton Diaz Saldivia",
    correo: "mdiaz@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 3° A",
    asignatura: "Formación Ciudadana e Historia del Presente"
  },
  {
    img: demoImage,
    nombre: "Jessica Fajardo Cuiñas",
    correo: "jfajardo@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 1° C",
    asignatura: "Inglés"
  },
  {
    img: demoImage,
    nombre: "Camila Soto Aguillar",
    correo: "csoto@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "—",
    asignatura: "Religión Evangélica – Desarrollo Personal"
  },
  {
    img: demoImage,
    nombre: "Michelle Funes Neira",
    correo: "mfunes@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 4° A",
    asignatura: "Simce – Paes – Límites y Derivadas – Matemáticas"
  },
  {
    img: demoImage,
    nombre: "Ana Maria Neira Johnston",
    correo: "aneira@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "—",
    asignatura: "Matemática"
  },
  {
    img: demoImage,
    nombre: "Antonella Almonacid López",
    correo: "aalmonacid@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "—",
    asignatura: "Mindfulness – Expresión Corporal"
  },
  {
    img: demoImage,
    nombre: "Patricia Barrientos",
    correo: "pbarrientos@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 4° B",
    asignatura: "Física – Ciencias para la Ciudadanía – FD Física – FD Ciencias de la Salud"
  },
  {
    img: demoImage,
    nombre: "Paola Navea",
    correo: "pnavea@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 1° A",
    asignatura: "—"
  },
  {
    img: demoImage,
    nombre: "Nelda Ibarra",
    correo: "nibarra@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "Jefatura: 4° C",
    asignatura: "Inglés Idioma Extranjero Cursos 2° A, 2° B, 3° A, 3° B, 4° A, 4° B, 4° C"
  },
  {
    img: demoImage,
    nombre: "Denisse Bascuñán",
    correo: "dbascunan@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "—",
    asignatura: "—"
  },
  {
    img: demoImage,
    nombre: "Camila Contreras",
    correo: "ccontreras@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "—",
    asignatura: "—"
  },
  {
    img: demoImage,
    nombre: "Jorge Trujillo Emilqueo",
    correo: "jtrujillo@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "—",
    asignatura: "Desarrollo Personal – Asistente de UTP"
  },
  {
    img: demoImage,
    nombre: "Celso Oyarzo Hidalgo",
    correo: "coyarzo@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "—",
    asignatura: "Educación Física y Salud 2 – Ciencias del Ejercicio Físico y Deportivo"
  },
  {
    img: demoImage,
    nombre: "Carolina Pardo",
    correo: "cpardo@liceoexperimental.cl",
    dpto: "Educación Media",
    more: "—",
    asignatura: "Economía y Sociedad"
  }
];


export const EquipoMedia = () => {
  return (
    <div className="container my-6">

      <h1 className="is-size-3 mx-6 mb-4">Educación Media</h1>
      <div className="columns is-flex is-flex-wrap-wrap mx-6">
        {docentes.map((member, index) => (
          <div className="column" key={index}>
            <Usuarios
              img={member.img}
              nombre={member.nombre}
              correo={member.correo}
              dpto={member.dpto}
              more={member.more}
              asignatura={member.asignatura}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
