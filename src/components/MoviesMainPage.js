import MovieCards from "./MovieCards";
import SearchResults from "./SearchResults";

export default function MoviesMainPage({movies, setSearch, getMovies}){
    return (
        <>
            <SearchResults setSearch={setSearch} getMovies={getMovies}/>
            <section>
                    {movies?.map((movie, index) => {
                        const {Title, Poster, Year, Type, imdbID} = movie;
                        console.log(movie);
                        return  <MovieCards key={index} title={Title} img={Poster} year={Year} type={Type} imdbID={imdbID} slug={movie?.movie?.label.replace(/\s/g, "-").toLowerCase()}/>
                    })}
            </section>
        </>
    );
}