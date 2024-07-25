import React from 'react';

const CardMateriales = ({ titulo, link }) => {
    return (
        <div className="box cardUtp">
            <h4>{titulo}</h4>
            <a href={link}>Ver más</a>
        </div>
    );
};

export default CardMateriales;