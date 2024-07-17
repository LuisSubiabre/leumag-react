import botonUmag from '../assets/img/boton_umag.jpg';
import botonAdmision from '../assets/img/boton_admision.jpg';
import { Link } from "react-router-dom";
export const EnlacesExternos = () => {
    return (
        <>
            <h2 className="is-size-4 mb-4">Enlaces Externos:</h2>
            <div className="grid is-flex is-flex-wrap-wrap is-justify-content-center">
                <div className="cell btn-home"><Link to="#"><img src={botonUmag} alt="Link sitio UMAG" /></Link></div>
                <div className="cell btn-home"><Link to="#"><img src={botonAdmision} alt="Link sitio Sistema de Admision Escolar" /></Link></div>
            </div>
        </>
    );
}