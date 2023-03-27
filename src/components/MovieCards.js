import { Link } from "react-router-dom";

export default function MovieCards({title, poster, type, year, slug}){
    return (
        <article className="card">
            <h2>{title}</h2>
            <img src={poster} alt={title}/>
            <p>Type: <span>{type}</span></p>
            <p>Utgivelses år: <span>{year}</span></p>
            <Link to={slug}></Link>
        </article>

    )
}
