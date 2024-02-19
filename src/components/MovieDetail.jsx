
import { useEffect,useState } from 'react';
import { useParams } from "react-router-dom";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const MovieDetail = () => {
  const[movie, setMovie] = useState(null);
  const { id} = useParams();

   useEffect(() => {
     const fetchMovieDetail = async () => {
        const response = await fetch(`${API_URL}&i=${id}`);
        const data  = await response.json();
        console.log(data);
        setMovie(data);
     };
     fetchMovieDetail();
   }, [id]);

   if(!movie) {
    return <div>Loading...</div>;
   }
  return (
    <div className='Detail-container'>
       <div className='img-container'>
           <img src={movie.Poster} alt={movie.Title} className='movie-img'/>
       </div>
       <div className='Detail-movie'>
            <h2>{movie.Title}</h2>
            <p>{movie.Plot}</p>
            <p>Director: {movie.Director}</p>
            <p>Actors: {movie.Actors}</p>
            <p>Released: {movie.Released}</p>
            {/* Add more details as needed */}
            <div className='list-container'>
                <ul className='list-group'>
                  <li><strong>Genre: </strong> {movie.Genre}</li>
                  <li><strong>Release:</strong> {movie.Released}</li>
                  <li><strong>IMDB Rating:</strong> {movie.imdbRating}</li>
                  <li><strong>Director:</strong> { movie.Director }</li>
                </ul>
            </div>
       </div>
    </div>
  )
}

export default MovieDetail
