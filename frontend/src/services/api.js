

const API_KEY="0b39140e0f03c5ea73c269e714bbe6fa"
const BASE_URL="https://api.themoviedb.org/3"

export const getPopularMovies=async () => {
    const response=await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data=await response.json()
    return data.results
    

}

export const searchMovies=async (query) => {
    const response=await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    const data=await response.json()
    return data.results
    

}

export const getMovieDetails = async (id) => {
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
    return await response.json()
}

export const getMovieTrailer = async (id) => {
    const response = await fetch(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`)
    const data = await response.json()
    const trailer =
        data.results.find(v => v.site === "YouTube" && v.type === "Trailer") ||
        data.results.find(v => v.site === "YouTube")
    return trailer ? trailer.key : null
}