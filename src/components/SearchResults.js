export default function SearchResults({setSearch, getMovies}){
    
    const handleSubmit = (event) => {
        event.preventDefault()
        getMovies()
    }
    
    const handleSearch = (event) =>{
        setSearch(event.target.value)
        console.log(event.target.value)
    }

    return(
        <form onSubmit={handleSubmit} className="search-bar">
            <input type="search" className="search-field" placeholder="Search for a movie" onChange={handleSearch}/>
            <input type="submit" className="search-button" value="Search"></input>
        </form>
    )
}