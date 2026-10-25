import '../css/moviecard.css';

import { useMovieContext } from "../contexts/moviecontext";
import { Link } from "react-router-dom";

export default function Moviecard({movie}) {
    
    const {isFavorite,addToFavorites,removeFromFavorites}=useMovieContext()
    const favorite=isFavorite(movie.id)


    function fav_btn(e) {
        e.preventDefault()
        if(favorite)
            removeFromFavorites(movie.id)
        else
            addToFavorites(movie)
    }



    return(
        <Link to={`/movie/${movie.id}`} className="moviecard">
        <div className="moviecard">
            <div className="postur">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="movie-overlay">
                    <button className={`fav-icon ${favorite ? "active":""}`} onClick={fav_btn}>
                        {favorite ? "❤️" : "🤍"}
                    </button>
                </div>
            </div>

            <div className="movie-info">
                <div className="movie-name">
                    <h3>{movie.title}</h3>
                </div>
                <div className="movie-date">
                    <p>{movie.release_date}</p>
                </div>
            </div>
        </div>
        </Link>
    )
}

