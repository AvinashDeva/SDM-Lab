import { useState } from "react";
import Movie from "./Movie"
import MovieList from "./MovieList"
function Home() {
    const[movies, setMovies] = useState([]);
    var setMoviesState = function (data) {
        setMovies([...movies, data]);
    };
    return (
        <div className = "container-fluid">
            <div className="row justify-content-evenly align-items-center" style={{"height":"98vh"}}>
                <div className="col-4 shadow p-5 text-center"><Movie setMovieState={setMoviesState}/></div>
                <div className="col-6"><MovieList movie={movies}/></div>
            </div>
        </div>
); 
}

 export default Home;