import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Search from './Search';
import Movie from './Movie';

const DEFAULT_API_URL = 'http://www.omdbapi.com/?s=avengers&apikey=82d522d7';

const App = () => {
  const [loading, setLoading] = useState(true);  
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(DEFAULT_API_URL)
      .then(responseJson => responseJson.json())
        .then(myJson => {
          setMovies(myJson.Search);
          setLoading(false);
        })
  }, []);

  const search = SearchValue => {
    setLoading(true);
    setErrorMessage(null);
    fetch(`http://www.omdbapi.com/?s=${SearchValue}&apikey=82d522d7`)
    .then(responseJson => responseJson.json())
      .then(myJson => {
        if (myJson.Response === "True") {
          setMovies(myJson.Search);
          setLoading(false);
        }
        else {
          setErrorMessage(myJson.Error);
          setLoading(false);
        }
      })
  }

  return (
    <div className = "App">
      <Header text = "HOOKED" />
      <Search search = {search}/>
      <p className = "App-intro"> Search Result: </p>
      <div className = "movies">
        {(loading && !errorMessage) ? 
          (<span>loading..</span>) : errorMessage ? 
            (<div className = "errorMessage">{errorMessage}</div>) : 
              (movies.map((movie, index) => (
                <Movie key = {`${index}-${movie.Title}`} movie = {movie} />
              ))
        )}
      </div>
    </div>
  );
}

export default App;
