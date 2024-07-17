import React from "react";
import Posts from './Posts';

export default function Card() {
    return (
        <>
            <div className="fixed-grid has-3-cols">
                <div className="columns">
                    <Posts />
                </div>
                <div className='is-flex is-justify-content-flex-end'>
                    <button className="button is-link is-light is-outlined">Ver más noticias</button>
                </div>
            </div>
        </>
    );
}