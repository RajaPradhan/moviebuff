import React from 'react';

const SearchBox = () => (
  <input
    type="text"
    placeholder="Search for Movies, People, TV Shows"
    style={{
      border: '1px solid #fff',
      padding: '0 12px',
      color: '#000',
      backgroundColor: '#fff',
      borderRadius: '2px',
      height: '38px',
    }}
  />
);

export default SearchBox;
