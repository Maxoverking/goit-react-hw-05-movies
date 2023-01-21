import { DIV, Header } from './App.styled';
import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

import { ThreeDots } from  'react-loader-spinner'
import {Routes,Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';


const Navigation = lazy(() => import('./Navigation'));
const SearchForm = lazy(() => import('./SearchForm'));
const Trending = lazy(() => import('./Trending'));
const MovieDetailsItem = lazy(() => import('./pages/MovieDetailsItem'));
const UrlError = lazy(() => import('./pages/UrlError'));
const Cast = lazy(() => import('./pages/Cast'));
const Reviews = lazy(() => import('./pages/Reviews'));

// import Navigation from './Navigation';
// import SearchForm from './SearchForm';
// import Trending from './Trending';
// import MovieDetailsItem from './pages/MovieDetailsItem';
// import UrlError from './pages/UrlError';
// import Cast from './pages/Cast';
// import Reviews from './pages/Reviews';


export const App = () => {
  return (
    <DIV>
      <Header>
        <Navigation/>
      </Header>
      <Suspense fallback={
                <ThreeDots 
                height="80" 
                width="80" 
                radius="9"
                color="#4fa94d" 
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
                />}>
        <Routes>
          <Route index element={<Navigate to="home" />}/>
          <Route path='home' element={<Trending/>}/>
          <Route path='movies' element={<SearchForm/>}/>
          <Route path='movies/:postId' element={<MovieDetailsItem/>}>
            <Route path='cast' element={<Cast/>}/>
            <Route path='reviews' element={<Reviews/>}/>
          </Route>
          <Route path='*' element={<UrlError />} />
          
        </Routes> 
      </Suspense>
      <ToastContainer/>
    </DIV>
  );
};
