// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Blogs from '../components/Blogs';

const Home = () => {
  return (
    <>
      <Hero />
      <Products />
      <Blogs />
    </>
  );
};

export default Home;