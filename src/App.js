
import './App.css';
import Header from './components/Header';
import SearchBar from './components/searchBar';
import SearchResults from './components/searchResults';
import React, { useState } from 'react';
import Description from './components/Description';
import { BrowserRouter } from 'react-router-dom';


function App() {

  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <Header />
      <Description />
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        <SearchResults results={results} />
      </div>

    </div>
  );
}

export default App;
