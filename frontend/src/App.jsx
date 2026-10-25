
import './css/App.css';

import Moviecard from "./components/moviecard"
import Home from "./pages/home";
import { Routes,Route } from "react-router-dom";
import Favorites from "./pages/favorites";
import MovieDetails from "./pages/moviedetails";
import  Navbar from "./components/navbar";
function App() {

  return (
    <div>
      <Navbar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/favorites" element={<Favorites/>} />
          <Route path="/movie/:id" element={<MovieDetails/>} />
        </Routes>
      </main>
      </div>
  )
}

export default App
