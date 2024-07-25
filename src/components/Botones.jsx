import React from "react";
import { Link } from "react-router-dom";

export default function Botones() {
    return (
        <div className="fixed-grid">
            <div className="is-flex is-justify-content-center is-flex-wrap-wrap">
                <a href="https://docs.google.com/spreadsheets/d/1x1BKq2yg9oTURQV8xOlJ_E2wY9mwt5CACvmFglWUSkU/edit" target="_blank"><div className="box-btn btn-home">Horarios E.G.B.</div></a>
                <a href="https://docs.google.com/spreadsheets/d/1Xd3OOQxeUJFRraxwiu_vkVBDycjZpICS3ttpl1k0kkU/edit" target="_blank"><div className="box-btn btn-home">Horarios E.M.</div></a>
                <Link to="/Evaluaciones" className="box-btn btn-home">Evaluaciones</Link>
                <Link to="/Materiales" className="box-btn btn-home">Lista de Materiales</Link>

                <a href="http://latium.cl/leumag/ph/apoderado/" target="_blank"><div className="box-btn btn-home">Apoderado</div></a>
                <a href="http://latium.cl/leumag/ph/funcionario/" target="_blank"><div className="box-btn btn-home">Funcionario</div></a>

            </div>
        </div>


    );
}