import React from 'react';
import CardUTP from './CardUtp';

const Evaluaciones = () => {
    return (
        <section className="container hero-footer-bg px-6 pb-6">
            <section className="content">
                <h2>Calendario de Evaluaciones</h2>
                <div className="grid">
                    <div className='cell'><CardUTP
                        titulo={'Evaluaciones 1° ciclo E.G.B.'}
                        link={'#'}
                    /></div>
                    <div className='cell'><CardUTP
                        titulo={'Evaluaciones 2° ciclo E.G.B.'}
                        link={'#'}
                    /></div>
                    <div className='cell'><CardUTP
                        titulo={'Evaluaciones E.M.'}
                        link={'#'}
                    /></div>
                </div>


            </section>
        </section>
    );
};

export default Evaluaciones;