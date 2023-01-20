import { useState, useEffect } from "react";
import MovieListItem from '../pages/MovieListItem/MovieListItem'
import {RequestTrendingMovies} from '../Servises/Servises';

const Trending = () => {
    const [trendMovie, setTrendMovie] = useState([]);
   useEffect(() => {
    fetchData()
  }, []);
    
    const fetchData = async () => {
          try {
            const trendingMovieArray = await RequestTrendingMovies();
            // console.log("🚀  trendingArray", trendingMovieArray );
              setTrendMovie(trendingMovieArray);
          } catch (error) {
            console.log("🚀  error Trending", error);
          }  
    }
    return (
        <div>
            <h1>Trending today</h1>
            <MovieListItem trendMovie={trendMovie} />
        </div>
    )
    
};
export default Trending;