import { Link } from "react-router-dom";

export default function MovieCards({title, img, type, year, imdbID}){
    return (
        <article className="card">
            <Link to={imdbID}><h2 className="film-title">{title}</h2></Link>
            <img src={img} alt={title} className="images"/>
            <p>Type: <span>{type}</span></p>
            <p>Utgivelses år: <span>{year}</span></p>
            
        </article>

    )
}
