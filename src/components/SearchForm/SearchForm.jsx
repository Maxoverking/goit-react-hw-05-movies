import { useEffect,useState  } from "react";
import {Ul,Li} from './SearchForm.slyled'
// import { DIV} from './SerchForm.slyled';
// import {RequestSearchMovies} from './Servises/Servises';
import {RequestSearchMovies} from '../Servises/Servises'

const SearchForm = () => {
     const imgBaseUrl = 'https://image.tmdb.org/t/p/w400';
const [movieName, setMovieName] = useState('')
const [searcMovieName, setSearchMovieName] = useState('')
const [movies, setMovies] = useState(null)

    const handleChange = evt => {
        const value = evt.currentTarget.value;
        setMovieName(value.toLowerCase());
    }

    const submitForm = (evt) => {
        evt.preventDefault();
        setSearchMovieName(movieName);
          console.log("🚀  movieName", movieName);
    }
    useEffect(() => {
        if (!searcMovieName) {
            return;
        }
        const renderMovie = async () => {
            const movieList = await RequestSearchMovies(searcMovieName);
           setMovies(movieList)
        }
       renderMovie() 
    },[searcMovieName])


    return (
        <div>
            <form onSubmit={submitForm}>
                <input 
                onChange={handleChange}
                type="text"
                name='name'
                autoComplete="off"
                autoFocus
                placeholder="Search favorite movie"
                />
                <button type="submit">Search</button>
            </form>
            {movies && (
                    <div>
                <Ul>
                    {movies.results.map(({ id, title, poster_path }) => {
                        return (
                            <Li key={id}>
                                <img src={`${imgBaseUrl}${poster_path}`} 
                                alt={title} 
                                width={70}/>
                                <a href="/" >{title}</a>
                            </Li>
                    ) 
                    })}              
                </Ul>
            </div>
            )}
            
            
      </div>
  );
}
export default SearchForm;

