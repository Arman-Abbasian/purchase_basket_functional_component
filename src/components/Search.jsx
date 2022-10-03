import React from 'react';

const Search = props => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for copyright free images  videos..."
        value={props.value}
        onChange={(e) => props.handleChange(e)}
      />
      <button  onClick={() => props.handleKeyword()}>Search</button>
    </div>
  );
};

export default Search;