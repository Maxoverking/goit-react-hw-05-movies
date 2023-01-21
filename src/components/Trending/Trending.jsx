import { useState, useEffect } from "react";
import { RequestTrendingMovies } from '../Servises/Servises';
import MovieListItem from '../pages/MovieListItem/MovieListItem'

const Trending = () => {
  const [trendMovie, setTrendMovie] = useState([]);
  
  useEffect(() => {
       const fetchData = async () => {
          try {
            const trendingMovieArray = await RequestTrendingMovies();
            setTrendMovie(trendingMovieArray);
          } catch (error) {
            console.log("🚀  error Trending", error);
          }  
    }
    fetchData();
  }, []);
    return (
        <div style={{padding:"0px 20px"}}>
            <h1>Trending today</h1>
            <MovieListItem trendMovie={trendMovie} />
        </div>
    )
};
export default Trending;