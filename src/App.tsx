import React from 'react';
import { Header } from './components/header';
import { MovieCard } from './components/movie-card';
import { MovieGrid } from './components/movie-grid';
import { NavigationBar } from './components/navigation-bar';
import { SearchBar } from './components/search-bar';

function App() {
  return (
    <div className='container'>
    <Header/>
    <NavigationBar/>
    <SearchBar/>
    <MovieGrid movieList={[1,2,3,4,5,6,78,9,9]} />
    </div>
  );
}

export default App;
