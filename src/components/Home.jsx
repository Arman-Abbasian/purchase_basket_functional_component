import React, { useState, useEffect } from 'react';
import Search from './Search';


const Home = () => {
    const [search, setSearch] = useState('');
    const [keyword, setKeyword] = useState('');
  
    useEffect(() => {
       console.log('Search: ', search);
       console.log('Keyword:', keyword);
     }, [search, keyword])
  
    const handleChange = e => {
      setSearch(e.target.value);
     };
  
    const handleKeyword = () => {
      setKeyword(search);
     };
  
    return (
      <div className="container pb-5">
        <Search
          handleChange={handleChange}
          handleKeyword={handleKeyword}
          keyword={keyword}
        />
      </div>
    );
  };
  
  export default Home;