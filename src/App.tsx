import React from 'react';
import './App.css';
import Cards from './components/cards/cards';
import SearchBar from './components/search-bar/search-bar';

const App = (): JSX.Element => (
  <div className="app">
    <h3>Hello from peaceful 🕊️ Belarus , fellow!</h3>
    <SearchBar placeholder="🔎 Search" />
    <Cards />
  </div>
);

export default App;
