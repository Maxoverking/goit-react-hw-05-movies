import { Link,useLocation} from 'react-router-dom';
import { Ul, Li } from './MovieListItem.styled'


const MovieListItem = ({ trendMovie }) => {
    const imgBaseUrl = 'https://image.tmdb.org/t/p/w400';
    const location = useLocation();
    return (
        <Ul>
            {trendMovie.map(({ id, title, poster_path }) => {
                return (
                    <Li key={id}>
                        <img src={`${imgBaseUrl}${poster_path}`} 
                        alt={title} 
                        width={70}/>
                        <Link to={`/movie/${id}`}
                            state={{from:location}}
                        >{title}</Link>
                    </Li>
                ) 
            })}
                
        </Ul>
    )
    
};
 

export default MovieListItem;