import React from "react";
import { EquipoAsistentes } from "./EquipoAsistentes";
import { EquipoDirectivo } from "./EquipoDirectivo";
import { EquipoDocente } from "./EquipoDocente";

export const  Estamentos = () => {

    return(
        <>
        <div className="container hero-footer-bg">
            <EquipoDirectivo />
            <EquipoDocente />
            <EquipoAsistentes />
        </div>
        </>

    );
};