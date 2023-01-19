import { useState, useEffect } from "react";
import { RequestMovie_IdDetails } from '../Servises/Servises';
import { useParams,Outlet, Link, useLocation } from 'react-router-dom';
import { DIV, PostImg } from "./MovieDetailsItem.styled";
import Cast from '../pages/Cast/Cast'
import Reviews from '../pages/Reviews/Reviews'

const MovieDetailsItem = () => {
    const postId = useParams();
    const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';
    const [trendingItem, setTrendingItem] = useState('')
      const location = useLocation();
        const backLink = location.state?.from ?? '/';

    //    console.log("🚀  trendingItem", trendingItem);
    useEffect(() => {
           
        const fetchData = async () => {
          try {
            const movieIdDetails = await RequestMovie_IdDetails(postId);
            console.log("🚀  movieIdDetails", movieIdDetails );
              setTrendingItem(movieIdDetails);
          } catch (error) {

            console.log("🚀  error TrendingItem", error);
            
          }  
    }
    fetchData()
        }, [postId]);
    
    
    const { id,poster_path,
        title,release_date,
        vote_average, overview,genres } = trendingItem;
    
    return (
        <div>
            <Link to={backLink}>
                <button type="button">
                    <a href="/">Go back</a>
                </button>
            </Link>
           
            {trendingItem && (
            <>
            <DIV>
                <PostImg>
                    <li key={id}>
                        <img src={`${imgBaseUrl}${poster_path}`} 
                        alt={title} 
                        width={200} />
                    </li>
                </PostImg>
                    <div>
                        <h2>{title} ({release_date.split("-")[0]})</h2>
                        <p>User score : {parseInt(vote_average * 10)}%</p>
                        <br />
                        <p><b>Overview</b></p>
                        <br />
                        <p>{overview}</p>
                        <br />
                        <span><b>Genders</b></span>
                        <p>
                            {genres.map(genre => genre.name + "  " )}
                        </p>                       
                    </div>
            </DIV>
                <hr />
            <div>
                <p>Addition information</p>
                        <Link>Cast
                            <Cast/>
                        </Link>
                        <br />
                        <Link>Reviews
                            <Reviews/>
                        </Link>
            </div>      
             </>
            )}
            <hr />
            {/* <Outlet/> */}
        </div>
    )
    
};
export default MovieDetailsItem;
    



