
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './css/main.css';
import Layout from './components/Layout'
import MovieSite from './components/MovieSite';
import MoviesMainPage from './components/MoviesMainPage';

function App() {

  const [title, setMovies] = useState([])
  const [search, setSearch] = useState('James Bond')

  const getMovies = async() =>{
    const response = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=e3f58a23`)
    const movieInformation = await response.json()
    setMovies(movieInformation.Search)
  }

  useEffect(() => {
    getMovies()
  }, [])

  console.log(title)

  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<MoviesMainPage movies={title} setSearch={setSearch} getMovies={getMovies}/>}/>
        <Route path=':slug' element={<MovieSite movies={title}/>}/>
      </Route>
    </Routes>
  );
}

export default App;
