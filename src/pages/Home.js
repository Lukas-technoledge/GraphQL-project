import React from 'react'
import Search from '../components/Search';
import { Button } from '@mui/material';
import AppInfo from '../components/AppInfo';

function Home() {


  
  return (
    <div className='home'>
      {/* search div 
      <Search />*/}

      {/* buttons 
      <div className="button">
      <Button variant='outlined'> Mission name </Button>
      <Button variant='outlined'> Rocket name </Button>
      <Button variant='outlined'> Company name </Button>
      <Button variant='outlined'> Site name </Button>
      </div>*/}

      {/* date picture data */}
      <AppInfo />
    </div>
  )
}

export default Home
