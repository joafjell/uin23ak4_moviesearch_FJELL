import { useParams } from "react-router-dom"

export default function MovieSite({movies}){
    const {slug} = useParams()
    const movie = movies.find((m) => m?.movie?.label.replace(/\s/g, "-").toLowercase() === slug)
    
    fetch(`http://www.omdbapi.com/?apikey=e3f58a23&i=${slug}`)
        .then(response => response.json())
        .then(data => console.log(data, "2"))

    
        

    return(
        <section>
            
            <img src={movie?.movie.poster} alt={movie?.movie.title}/>
            <p>Skuespillere: </p>
            <ul>

            </ul>
        </section>
    )

}