import React from 'react';
import Cards from '../cards/cards';
import SearchBar from '../search-bar/search-bar';
import './home.css';

class Home extends React.Component {
  render() {
    return (
      <main className="home">
        <SearchBar placeholder="🔎 Search" />
        <Cards />
      </main>
    );
  }
}

export default Home;
