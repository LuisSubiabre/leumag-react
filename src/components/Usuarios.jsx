import React from 'react';

export const Usuarios = (props) => {

    return (

        <>
            <div className="personal">
                <div>
                    <figure className="image is-96x96">
                        <img className="is-rounded" src={props.img} alt="" />
                    </figure>
                </div>
                <div className="personal-info">
                    <div className='has-text-weight-bold'>{props.nombre}</div>
                    <div>{props.dpto}</div>
                    <div className='is-size-7'>{props.correo}</div>
                    <div className='is-size-7'>{props.more}</div>
                    <div className='is-size-7'>{props.asignatura}</div>
                </div>
            </div>
        </>


    )
}