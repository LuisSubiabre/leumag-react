import React from "react";
import Card from "./Card";
import Botones from "./Botones";

export default function Home() {
    return (
        <>
            
                <section className="container hero-footer-bg px-6">
                    <h2>Noticias Recientes: </h2>
                    <div className="columns">
                        <div className="column is-four-fifths">
                        <Card />
                        </div>
                        <div className="column">
                        <Botones />
                        </div>

                    </div>
                </section>
        
        </>
    );
}