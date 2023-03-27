
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './css/main.css';
import Layout from './components/Layout'
import MovieSite from './components/MovieSite';
import MoviesMainPage from './components/MoviesMainPage';

function App() {

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('James Bond')

  const getMovies = async() =>{
    const response = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=265fbd2f`)
    const movieInformation = await response.json()
    setMovies(movieInformation.Search)
  }



  useEffect(() => {
    getMovies()
  }, [])

  console.log(movies)

  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<MoviesMainPage movies={movies} setSearch={setSearch} getMovies={getMovies}/>}/>
        <Route path=':slug' element={<MovieSite movies={movies}/>}/>
      </Route>
    </Routes>
  );
}

export default App;
