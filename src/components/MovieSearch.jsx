// MovieSearch.js
import { useState, useEffect } from 'react';
import SearchIcon from './../assets/search.svg';
import MovieCard from '../MovieCard';


const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies('transformers');
  }, []);

  const searchMovies = async (title) => {
    try {
        const response  = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      setMovies(data.Search || []);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  return (
    <div className="search-container">
      <div className="search">
            <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for movies"
            />
            <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
            />
      </div>
        {movies.length > 0 ? (
        <div className="container">
            {movies.map((movie) => (
                <div key={movie.imdbID}>
                <MovieCard movie={movie} />
                </div>
            ))}
        </div>
        ) : (
        <div className="empty">
           <h2>No movies found</h2>
        </div>
        )}
    </div>
  );
};

export default MovieSearch;
