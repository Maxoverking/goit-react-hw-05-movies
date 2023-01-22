import { BUTTON,MyIcons} from './SearchForm.slyled'
import { toast, Zoom } from 'react-toastify';

import MovieListItem from '../pages/MovieListItem/MovieListItem'
import {RequestSearchMovies} from '../Servises/Servises'
import {useState , useEffect} from "react";
import { useSearchParams } from "react-router-dom";

const SearchForm = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const movieName = searchParams.get('query') ?? '';
    const [searchMovie, setSearchMovie] = useState(movieName);
    const [movies, setMovies] = useState(null);

    const handleChange = (evt) => {
        const getMovieName = evt.target.value;
        setSearchMovie(getMovieName.toLowerCase());
    }
    const submitForm = (evt) => {
        evt.preventDefault();
        setSearchParams({ query: searchMovie });
    }
    useEffect(() => {
        if (!movieName.trim()) {
            return;
        }
        const renderMovie = async () => {
            const { results } = await RequestSearchMovies(movieName);
            if (results.length === 0) {
                toast.error('WRONG MOVIE NAME', {
                            transition:Zoom,
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                            icon: <MyIcons/>,
                            });
                return;
            }
            setMovies(results);
        }
        renderMovie()
    }, [movieName]);

    return (
        <div style={{padding:'20px'}}>
            <form onSubmit={submitForm}>
                <input style={{ padding:'4px 10px'}} 
                onChange={handleChange}
                type="text"
                value={searchMovie}
                autoComplete="off"
                autoFocus
                placeholder="Search favorite movie"
                />
                <BUTTON type="submit" >Search</BUTTON>
            </form>
            {movies
                && (
            <div>
                <MovieListItem trendMovie={movies} />
            </div>
            )}
      </div>
  );
}
export default SearchForm;