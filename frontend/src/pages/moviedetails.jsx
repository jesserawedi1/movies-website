

import '../css/moviedetails.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, getMovieTrailer } from "../services/api.js";

export default function MovieDetails() {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)
    const [trailerKey, setTrailerKey] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const load = async () => {
            try {
                const [details, key] = await Promise.all([
                    getMovieDetails(id),
                    getMovieTrailer(id)
                ])
                setMovie(details)
                setTrailerKey(key)
            } catch (err) {
                console.log(err)
                setError("Failed to load this movie...")
            } finally {
                setLoading(false)
            }
        }
        load()
    }, [id])

    if (loading) return <div className="loading">Loading...</div>
    if (error || !movie) return <div className="error-message">{error}</div>

    return (
        <div className="movie-details">
            <div className="player">
                {trailerKey ? (
                    <iframe
                        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
                        title={movie.title}
                        allow="autoplay; encrypted-media; fullscreen"
                        allowFullScreen
                    />
                ) : (
                    <p>No trailer available for this movie.</p>
                )}
            </div>

            <div className="details-info">
                <h1>{movie.title}</h1>
                <p className="meta">
                    {movie.release_date} · {movie.runtime} min · ⭐ {movie.vote_average?.toFixed(1)}
                </p>
                <p className="genres">{movie.genres?.map(g => g.name).join(" • ")}</p>
                <p className="overview">{movie.overview}</p>
            </div>
        </div>
    )
}