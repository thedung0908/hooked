import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Search from './Search';
import Movie from './Movie';

const DEFAULT_API_URL = 'http://www.omdbapi.com/?s=avengers&apikey=82d522d7';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(DEFAULT_API_URL)
      .then(responseJson => responseJson.json())
        .then(myJson => {
          setMovies(myJson.Search);
        })
  }, []);

  const search = SearchValue => {
    const searchURL = `http://www.omdbapi.com/?s=${SearchValue}&apikey=82d522d7`;
    fetch(searchURL)
    .then(responseJson => responseJson.json())
      .then(myJson => {
        if (myJson.Response === "True") {
          setMovies(myJson.Search);
        }
        else {
          
        }
      })
  }

  return (
    <div className = "App">
      <Header text = "HOOKED" />
      <Search search = {search}/>
      <p> Search Result: </p>
      <div className = "movies">
        {movies.map((movie, index) => (
          <Movie key = {`${index}-${movie.Title}`} movie = {movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
