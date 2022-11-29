import React from 'react'
import { useState } from 'react';
import ImgShow from './ImgShow';

const Search = () => {
  const [img, setImg] = useState("");
  const inputEvent = (event) => {
    const show = event.target.value;
    console.log(show);
    setImg(show);
  }
  return (
    <>
      <div className='searchbar'>
        <input type="text" placeholder='Search Anything...' value={img} onChange={inputEvent} />
      </div>
      <div className='container'>
        <div className='row'>
          <ImgShow name={img} />
        </div>
      </div>
    </>
  )
}

export default Search;
