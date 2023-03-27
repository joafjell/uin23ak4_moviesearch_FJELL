import MovieCards from "./MovieCards";
import SearchResults from "./SearchResults";

export default function MoviesMainPage({movies, setSearch, getMovies}){
    console.log(setSearch)
    return (
        <>
            <SearchResults setSearch={setSearch} getMovies={getMovies}/>
            <section>
                <h2>Filmer</h2>
                    {movies?.map((movie, index) => (
                        <MovieCards key={index} title={movie?.movie?.label} img={movie?.movie?.image} runtime={movie?.movie?.runtime} slug={movie?.movie?.label.replace(/\s/g, "-").toLowerCase()}/>
                    ))}
            </section>
        </>
    );
}