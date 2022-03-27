import React from 'react';
import './search-bar.css';

interface MyProps {
  placeholder: string;
}

const SearchBar = ({ placeholder }: MyProps): JSX.Element => (
  <input
    className="search-bar"
    type="text"
    name="input"
    placeholder={placeholder}
  />
);
export default SearchBar;
