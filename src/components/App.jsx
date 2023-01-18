// import { DIV, Header } from './App.styled';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';

import Navigation from './Navigation';
import SearchForm from './SearchForm';
import Trending from './Trending';
import TrendingItem from './TrendingItem';
// import { useState } from 'react';
// import { useEffect } from 'react';


export const App = () => {
//  const [moviesId,setMoviesId]=useState(false)

//  console.log("🚀  moviesId", moviesId);

  // useEffect(() => {
  //   fetchData()
  // }, []);

  // const fetchData = async () => {


  //   // const trending = await RequestTrendingMovies();
  //   const search = await RequestSearchMovies();
  //   const movie_id = await RequestMovie_IdDetails();
  //   const credits = await RequestMovie_IdCredits();
  //   const reviews = await RequestMovie_IdReviews();

  //   console.log("🚀  reviews", reviews);

  //   console.log("🚀  credits", credits);

  //   console.log("🚀  movie_id", movie_id);

  //   console.log("🚀  search", search);

  //   // console.log("🚀  trending", trending);
    
  // }

//   const getIdItem = (id) => {
//   setMoviesId(id)
//   console.log("🚀  idApp", id);
// }
  // console.log("🚀  RequestHTTP", RequestHTTP().then(data => data).then(d=>console.log(d)));

  return (
    <>
    {/* <BrowserRouter basename='goit-react-hw-05-movies'>
     <DIV>
       <Header>
     <Navigation />
      </Header>
       <Routes>
         <Route path='/home' element={<Trending/>}/>
       </Routes> */}
    <Navigation />
    <Trending />
    <SearchForm/>
      <TrendingItem />
    {/* </DIV>
    </BrowserRouter> */}
      </>
  );
};
