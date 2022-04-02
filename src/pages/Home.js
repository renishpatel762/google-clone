import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from '@material-ui/core';
import Search from '../components/Search';

const Home = () => {
  return (
    <div className='home'>
      {/* <h1>This is home page</h1> */}
      <div className='home__header'>
        <div className='home__headerLeft'>
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>


        </div>
        <div className='home__headerRight'>
          <Link to='/gmail'>Gmail</Link>
          <Link to='/images'>Images</Link>
          <AppsIcon />
          <Avatar />

        </div>

      </div>
      <div className='home__body'>
        <img
          src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="google logo"
        />
        <Search hideButtons />
        {/* <center><h1>test</h1></center> */}
      </div>
      <div className='home__inputcontainer'>
      </div>
    </div>
  )
}

export default Home