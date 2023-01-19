import { useEffect, useState } from "react";
import MovieListItem from '../pages/MovieListItem/MovieListItem'
import {DIV,BUTTON} from './SearchForm.slyled'
// import {Ul,Li} from './SearchForm.slyled'
import {RequestSearchMovies} from '../Servises/Servises'

const SearchForm = () => {
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
            const {results} = await RequestSearchMovies(searcMovieName);
           setMovies(results)
        }
       renderMovie() 
    },[searcMovieName])


    return (
        <DIV>
            <form onSubmit={submitForm}>
                <input 
                onChange={handleChange}
                type="text"
                name='name'
                autoComplete="off"
                autoFocus
                placeholder="Search favorite movie"
                />
                <BUTTON type="submit">Search</BUTTON>
            </form>
            {movies && (
                <div>
                     <MovieListItem trendMovie={movies} />
                {/* <Ul>
                    {movies.map(({ id, title, poster_path }) => {
                        return (
                            <Li key={id}>
                                <img src={`${imgBaseUrl}${poster_path}`} 
                                alt={title} 
                                width={70}/>
                                <a href="/" >{title}</a>
                            </Li>
                    ) 
                    })}              
                </Ul> */}
            </div>
            )}
      </DIV>
  );
}
export default SearchForm;

