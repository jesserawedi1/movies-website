import '../css/home.css';
import Moviecard from "../components/moviecard";
import { useState, useEffect } from "react";
import { getPopularMovies,searchMovies } from "../services/api.js";


export default function home() {

    const [searchquery,setquery]=useState("")
    const [movies,setMovies]=useState([])
    const [error,setError]=useState(null)
    const [loading,setLoading]=useState(true)
    const search=async (e)=>{
        e.preventDefault()
        setLoading(true)
        try {   
            const serachResults=await searchMovies(searchquery)
            setMovies(serachResults)
            setError(null)
        } catch (error) {
            console.log(error)
            setError("failed to search movie ...")
        } finally{
            setLoading(false)           
        }
    }

    
    useEffect(()=>{
        const loadPopularMovies=async () => {
            try {
                const PopularMovies=await getPopularMovies()
                setMovies(PopularMovies)
            } catch (error) {
                console.log(error)
                setError("Faild to load movies...")
            }
            finally{
                setLoading(false)
            }
        }
        loadPopularMovies()
    },[])
    
    return(
        <div className="home">
            <form onSubmit={search} className="search-form">
                <input type="text" placeholder="search for a movie...." className="search-bar" value={searchquery}
                onChange={(e)=>setquery(e.target.value)}
                />
                <button type="submit" className="search-btn">search</button>
            </form>
            {loading? <div className="loading">Loading...</div> : 
                <div className="movie-grid">
                    {movies.map((movie)=>(
                        
                        (<Moviecard movie={movie} key={movie.id} />)
                    ))}
                </div>
            }
            

                

        </div>
        
        



    )
}