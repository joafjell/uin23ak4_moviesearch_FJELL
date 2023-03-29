//import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function MovieSite({movies}){
    const {slug} = useParams()
    const movie = movies.find((m) => m?.movie?.label.replace(/\s/g, "-").toLowercase() === slug)
 

    fetch(`http://www.omdbapi.com/?apikey=e3f58a23&i=${slug}`)
        .then(response => response.json())
        .then(movieInfo => console.log(movieInfo, "2"))
    
 
    
    /*const getMovieInfo = async() => {
        const response = await fetch(`http://www.omdbapi.com/?apikey=e3f58a23&i=${slug}`)
        const movieInf = await response.json()
        setMovieInfo(movieInf.hits)
    }
    useEffect(() => {
        getMovieInfo()
    },[])

    console.log(movieInfo, "3")*/

    return(
        <section>
            <h2></h2>
            <img src={slug?.Poster} alt={slug?.Title}/>
            <p>Skuespillere: {slug?.Actors} </p>
            <ul>

            </ul>
        </section>
    )

}