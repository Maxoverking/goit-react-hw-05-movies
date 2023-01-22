import { Link,useLocation} from 'react-router-dom';
import { Ul, Li } from './MovieListItem.styled'
import PropTypes  from "prop-types"


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
                        width={80}/>
                        <Link
                            to={`/movies/${id}`} 
                            state={{ from: location.pathname+location.search}}>
                        {title}</Link>
                    </Li>
                ) 
            })}
        </Ul>
    )
};
export default MovieListItem;

MovieListItem.propType = {
    trendMovie: PropTypes.array.isRequired,
}