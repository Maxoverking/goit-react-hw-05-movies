import { DIV, Header } from './App.styled';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';

import Navigation from './Navigation';
import SearchForm from './SearchForm';
import Trending from './Trending';
import MovieDetailsItem from './MovieDetailsItem';
// import { useState } from 'react';
// import { useEffect } from 'react';

export const App = () => {
  return (
    <>
    <BrowserRouter basename='goit-react-hw-05-movies'>
    <DIV>
      <Header>
        <Navigation />
      </Header>
      <Routes>
        <Route path='/home' element={<Trending/>}/>
        <Route path='/movies' element={<SearchForm/>}/>
        <Route path='/movies/:movie_id' element={<MovieDetailsItem />}/>
      </Routes>
    {/* <Trending /> */}
    
    </DIV>
    </BrowserRouter>
      </>
  );
};
