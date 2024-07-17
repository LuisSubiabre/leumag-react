import React from "react";
import Card from "./Card";
import Botones from "./Botones";
import Documentos from "./Documentos";
import { Comunicados } from "./Comunicados";
import { EnlacesExternos } from "./EnlacesExternos";

export default function Home() {
    return (
        <>

            <section className="container hero-footer-bg px-6">
                <h2 className="is-size-4 mb-4">Noticias recientes:</h2>

                <div className="columns">
                    <div className="column is-four-fifths">
                        <Card />
                    </div>
                    <div className="column">
                        <Botones />
                    </div>
                </div>

                <Documentos />
                <Comunicados />
                <EnlacesExternos />

            </section>
            <div className="container py-6"></div>

        </>
    );
}