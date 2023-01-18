
import { useState, useEffect } from "react";
import {Ul,Li} from './Trending.styled'
import {RequestTrendingMovies} from '../Servises/Servises';

const Trending = ({getIdItem}) => {
    const imgBaseUrl = 'https://image.tmdb.org/t/p/w400';
    const [trendMovie, setTrendMovie] = useState([]);
   useEffect(() => {
    fetchData()
  }, []);
    
    const fetchData = async () => {
          try {
            const trendingMovieArray = await RequestTrendingMovies();
            console.log("🚀  trendingArray", trendingMovieArray );
              setTrendMovie(trendingMovieArray);
          } catch (error) {

            console.log("🚀  error Trending", error);
            
          }  
    }
        const getMoviesId = (getId) => {
        // RequestMovie_IdDetails(getId)
            getIdItem(getId);
    }


    return (
        <div>
            <h1>Trending today</h1>
            <Ul>
                {trendMovie.map(({ id, title, poster_path }) => {
                    return (
                        <Li key={id}>
                            <img src={`${imgBaseUrl}${poster_path}`} 
                            alt={title} 
                            width={70}/>
                            <a href="/" onClick={(e) => {
                                e.preventDefault()
                               getMoviesId(id)
                            }}>{title}</a>
                        </Li>
                   ) 
                })}
                
            </Ul>
        </div>
    )
    
};
export default Trending;