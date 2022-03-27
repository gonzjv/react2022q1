import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/about-us/about-us';
import Cards from './components/cards/cards';
import Layout from './components/layout/layout';
import SearchBar from './components/search-bar/search-bar';

const App = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Cards />} />
        <Route path="about-us" element={<AboutUs />} />
        {/* // <div className="app">
      //   <h3>Hello from peaceful 🕊️ Belarus , fellow!</h3>
      //   <SearchBar placeholder="🔎 Search" />
      //   <Cards />
      // </div> */}
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
