import { Link } from "react-router-dom";

export default function MovieCards({title, img, type, year, slug}){
    return (
        <article className="card">
            <h2 className="film-title">{title}</h2>
            <img src={img} alt={title} className="images"/>
            <p>Type: <span>{type}</span></p>
            <p>Utgivelses år: <span>{year}</span></p>
            <Link to={slug}></Link>
        </article>

    )
}
