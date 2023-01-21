import { DIV, PostImg,Container } from "./MovieDetailsItem.styled";
import { ThreeDots } from  'react-loader-spinner'
import { RequestMovie_IdDetails } from '../../Servises/Servises';
import { useState, useEffect ,Suspense} from "react";
import { Outlet,useParams, Link,NavLink, useLocation} from 'react-router-dom';

const MovieDetailsItem = () => {
    const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';
    const {postId} = useParams();
    const [trendingItem, setTrendingItem] = useState('');
    const location = useLocation();
    const backLink = location.state?.from ?? '/home';

    useEffect(() => {
        const fetchData = async () => {
          try {
            const movieIdDetails = await RequestMovie_IdDetails(postId);
            setTrendingItem(movieIdDetails);
          } catch (error) {
            console.log("🚀  error TrendingItem", error);
          }  
    }
    fetchData()
    }, [postId]);
    
    // const closeCast = () => {
    //     if (!location.pathname.includes('cast')) {
    //         // setAddCast('cast');
    //         // return;
    //     }
    //     //  console.log("🚀  location.state", location.state);
    //      console.log("🚀  location.state", location.pathname.includes(''));
    //     //  console.log("🚀  location.state.from)", location.state.from);
    //     // return location.pathname;
    // }
    const { id,
        poster_path,
        title,
        release_date,
        vote_average, 
        overview,
        genres } = trendingItem;
    
    return (
        <Container>
            <Link
                to={backLink}
            >
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
                        <NavLink to={`cast`} 
                        state={{from:location.state?.from}}>Cast</NavLink>
                        <br />
                        <NavLink to={`reviews`}
                        state={{ from: location.state?.from }}>Reviews</NavLink>
            </div>      
             </>
            )}
            <hr />
            <Suspense
                fallback={<ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="#4fa94d" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
        />}>
                <Outlet />
            </Suspense>
        </Container>
    )
};
export default MovieDetailsItem;
    



