import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=7df6de4dd7060a529be76412dec8d9af';
const trending_all = '/trending/movie/day';
const search_movie = '/search/movie';

export const RequestTrendingMovies = async () => {
  try {
    const response = await axios.get(`${trending_all}${API_KEY}`);
    // return response.data.results;
    return response.data.results.map(({ id, title, poster_path }) => {
      return {
        id,
        title,
        poster_path,
      };
    });
  } catch (error) {
    console.log('🚀  error RequestTrendingMovies', error);
  }
};

export const RequestSearchMovies = async inputValue => {
  try {
    const response = await axios.get(
      `${search_movie}${API_KEY}&query=${inputValue}&language=en-US&page=1&include_adult=false`
    );
    return response.data;
  } catch (error) {
    console.log('🚀  error RequestSearchMovies', error);
  }
};

export const RequestMovie_IdDetails = async movie_id => {
  try {
    const response = await axios.get(
      `/movie/${movie_id}${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.log('🚀  error RequestMovie_Id', error);
  }
};
export const RequestMovie_IdCredits = async movie_id => {
  try {
    const response = await axios.get(
      `/movie/100088/credits${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.log('🚀  error RequestMovie_IdCredits', error);
  }
};
export const RequestMovie_IdReviews = async movie_id => {
  try {
    const response = await axios.get(
      `/movie/100088/reviews${API_KEY}&language=en-US&page=1`
    );
    return response.data;
  } catch (error) {
    console.log('🚀  error RequestMovie_IdReviews', error);
  }
};
