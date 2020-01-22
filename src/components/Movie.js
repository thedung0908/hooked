import React from "react";

const DEFAULT_PLACEHOLDER_POSTER = 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg';

const Movie = ({movie}) => {
    const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_POSTER : movie.Poster;
    return (
        <div className = "movie">
            <h2> {movie.Title} </h2>
            <div>
                <img 
                    width = "200"
                    alt = {`The movie title: ${movie.Title}`}
                    src = {poster}
                />
            </div>
            <p> {movie.Year} </p>
        </div>
    );
}

export default Movie;