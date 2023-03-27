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
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="Search for movie" onChange={handleSearch}/>
            <input type="submit" value="search"></input>
        </form>
    )
}