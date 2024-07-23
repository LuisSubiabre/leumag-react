import Posts from './Posts';
import { Link } from "react-router-dom";
export default function Card() {
    return (
        <>
            <div className="fixed-grid has-3-cols">
                <div className="columns">
                    <Posts />
                </div>
                <div className='is-flex is-justify-content-flex-end'>
                    <Link to='/Noticias' className="navbar-item">
                        <button className="button is-link is-light is-outlined">Ver más noticias</button>
                    </Link>

                </div>
            </div>
        </>
    );
}