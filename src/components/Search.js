import React from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';


function Search({ search, setSearch, handleChange1 }) {
  return (
    <div className='search'>
      <div className="search__input">
        <SearchIcon className = 'search__inputIcon' />
        <input onChange={handleChange1} value={search} placeholder='Search for bt mission name'/>
      </div>
    </div>
  )
}

export default Search