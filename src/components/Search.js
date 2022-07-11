import React from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';


function Search() {
  return (
    <div className='search'>
      <div className="search__input">
        <SearchIcon className = 'search__inputIcon' />
        <input  placeholder='Search for rocket'/>
      </div>
    </div>
  )
}

export default Search
