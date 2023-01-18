import { useState, useEffect } from "react";
import { RequestMovie_IdDetails } from '../Servises/Servises';
import { DIV,PostImg } from "./TrendingItem.styled";

const TrendingItem = () => {
    const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';
    const[trendingItem,setTrendingItem] = useState('')

    //    console.log("🚀  trendingItem", trendingItem);
       useEffect(() => {
            fetchData()
        }, []);
    
    const fetchData = async () => {
          try {
            const movieIdDetails = await RequestMovie_IdDetails(315162);
            console.log("🚀  movieIdDetails", movieIdDetails );
              setTrendingItem(movieIdDetails);
          } catch (error) {

            console.log("🚀  error TrendingItem", error);
            
          }  
    }
    const { id,poster_path,
        title,release_date,
        vote_average, overview,genres } = trendingItem;
    
    return (
        <div>
            <button type="button">
                <a href="/">Go back</a>
            </button>
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
                            {genres.map(g => g.name + "  " )}
                        </p>                       
                    </div>
            </DIV>
                <hr />
            <div>
                <p>Addition information</p>
                <a href="/">Cast
                    
                </a>
                    <br />
                    <a href="/">Reviews</a>
                    </div>
             </>
                
            )

            }
            
            
            <hr />
        </div>
    )
    
};
export default TrendingItem;
    



