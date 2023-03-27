import { useParams } from "react-router-dom"

export default function MovieSite({movies}){
    const {slug} = useParams()
    const movie = movies.find((m) => m?.movie?.label.replace(/\s/g, "-").toLowercase() === slug)
    
    return(
        <section>
            <h1>{movie?.movie.label}</h1>
            <img src={movie?.movie.image} alt={movie?.movie.label}/>
            <ul>
            
            </ul>
        </section>
    )

}