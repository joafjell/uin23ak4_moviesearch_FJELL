
import { useEffect, useState } from 'react';
import './App.css';
import './css/main.css'

function App() {

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('James Bond')

  const getMovies = async() =>{
    const response = await fetch(`http://www.omdbapi.com/search?q=${search}?i=tt3896198&apikey=265fbd2f`)
    const movieInformation = await response.json()
    setMovies(movieInformation.hits)
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <h1>Filmsøk</h1>
  );
}

export default App;
