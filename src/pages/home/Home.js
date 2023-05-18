import React from 'react';
import Header from "../../components/header/Header";
import "./home.css";
import Single from '../single/Single';
import SideBar from '../../components/sidebar/SideBar';

const Home = () => {
  return (
    <>
      <Header />
      <div className='home'>
        <Single />
        <SideBar />
      </div>
    </>
    
  )
}

export default Home
