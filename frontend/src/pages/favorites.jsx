import '../css/favorites.css';
import '../css/home.css';
import Moviecard from "../components/moviecard";
import { useMovieContext } from "../contexts/moviecontext";

export default function Favorites() {
    const { favorites } = useMovieContext()

    if (favorites.length > 0) {
        return (
            <div className="favorites">
                <h2>Your favorites</h2>
                <div className="movie-grid">
                    {favorites.map((movie) => (
                        <Moviecard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="fav-empty">
            <h2>no favorite movies yet</h2>
        </div>
    )
}