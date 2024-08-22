import React from 'react';
import Navbar from '../components/Navbar';
import SearchContainer from '../components/SearchContainer';
import './Home.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="search-wrapper">
        <SearchContainer title="Znam" expandDirection="left" />
        <SearchContainer title="NEznam" expandDirection="right" />
      </div>
    </>
  );
};

export default Home;
