import React from 'react';
import './search-box.styles.css';

// use function component if internal state and life cycle method is not needed
// simply receive props and return HTML
export const SearchBox = ({ placeholder, handleChange }) => (
  <input 
    className='search'
    type='search' 
    placeholder={ placeholder }
    onChange={ handleChange }
  />
);