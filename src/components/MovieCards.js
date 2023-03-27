import { Link } from "react-router-dom";

export default function MovieCards({title, genre, runtime, slug}){
    return (
        <article className="card">
            <h2>{title}</h2>
            <p>Genre: <span>{genre}</span></p>
            <p>Runtime: <span>{runtime}</span></p>
            <Link to={slug}/>
        </article>
    )
}