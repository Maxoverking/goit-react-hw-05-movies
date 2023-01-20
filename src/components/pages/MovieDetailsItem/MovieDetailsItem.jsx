import { useState, useEffect } from "react";
import { RequestMovie_IdDetails } from '../../Servises/Servises';
import { useParams, Link,NavLink, useLocation} from 'react-router-dom';
import { DIV, PostImg } from "./MovieDetailsItem.styled";
// import Cast from '../pages/Cast/Cast'
// import Reviews from '../pages/Reviews/Reviews'

const MovieDetailsItem = () => {
    const postId = useParams();
    // const postId = 593643;
    const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';
    const [trendingItem, setTrendingItem] = useState('')
    const location = useLocation();
    const backLink = location.state?.from ?? '/home';

    useEffect(() => {
        const fetchData = async () => {
          try {
            const movieIdDetails = await RequestMovie_IdDetails(postId.id);
              setTrendingItem(movieIdDetails);
          } catch (error) {
            console.log("🚀  error TrendingItem", error);
          }  
    }
    fetchData()
        }, [postId.id]);
    
    const { id,poster_path,
        title,release_date,
        vote_average, overview,genres } = trendingItem;
    
    return (
        <div>
            <Link to={backLink}>
                <button type="button">Go back</button>
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
                        <NavLink to={`credits`}>Cast</NavLink>
                        <br />
                        <NavLink to={`reviews`}>Reviews</NavLink>
            </div>      
             </>
            )}
            <hr />
            {/* <Cast to={`/credits`} /> */}
             {/* <Reviews to={`/reviews`}/> */}
            {/* <Outlet/> */}
        </div>
    )
    
};
export default MovieDetailsItem;
    



