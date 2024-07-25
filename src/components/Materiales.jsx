import React from 'react';
import CardUTP from './CardUtp';

const Materiales = () => {
    return (
        <section className="container hero-footer-bg px-6 pb-6">
            <section className="content">
                <h2>Lista de Materiales</h2>
                <h3>Educación Parvularia</h3>
                <div className="grid">
                    <div className='cell'><CardUTP
                        titulo={'NT1'}
                        link={'http://portal.liceoexperimental.cl/wp-content/uploads/2024/01/LM-NT1-2024.pdf'}
                    /></div>
                    <div className='cell'><CardUTP
                        titulo={'NT2'}
                        link={'http://portal.liceoexperimental.cl/wp-content/uploads/2024/01/LM-NT2-2024.pdf'}
                    /></div>
                    <div className='cell'><CardUTP
                        titulo={'Textos de Inglés'}
                        link={'http://portal.liceoexperimental.cl/wp-content/uploads/2024/01/Textos-de-Ingl%C3%A9s-2024.pdf'}
                    /></div>
                </div>

                <h3>Educación Básica</h3>
                <div className="grid">
                    <div className='cell'><CardUTP
                        titulo={'1ero Básico'}
                        link={'#'}
                    /></div>
                    <div className='cell'><CardUTP
                        titulo={'2do Básico'}
                        link={'#'}
                    /></div>
                    <div className='cell'><CardUTP
                        titulo={'3ero Básico'}
                        link={'#'}
                    /></div>
                    <div className='cell'><CardUTP
                        titulo={'4to Básico'}
                        link={'#'}
                    /></div>
                    <div className='cell'><CardUTP
                        titulo={'5to Básico'}
                        link={'#'}
                    /></div>
                    <div className='cell'><CardUTP
                        titulo={'6to Básico'}
                        link={'#'}
                    /></div>
                    <div className='cell'><CardUTP
                        titulo={'7mo Básico'}
                        link={'#'}
                    /></div>
                    <div className='cell'><CardUTP
                        titulo={'8vo Básico'}
                        link={'#'}
                    /></div>
                </div>

                <h3>Educación Media</h3>
                <div className="grid">
                    <div className='cell'><CardUTP
                        titulo={'1ero a 4to Medio'}
                        link={'#'}
                    /></div>
                    <div className='cell'><CardUTP
                        titulo={'Plan Lector'}
                        link={'#'}
                    /></div>


                </div>
            </section>
        </section>
    );
};

export default Materiales;