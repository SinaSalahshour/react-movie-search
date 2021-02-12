import React from 'react';

import "./App.css"
import MovieSearch from './components/MovieSearch';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MovieSearch />
    </div>
  );
}

export default App;
