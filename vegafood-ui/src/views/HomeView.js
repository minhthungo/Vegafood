import React from 'react';

import Hero from '../components/Home/Hero';
import About from '../components/Home/About';
import Pieces from '../components/Home/Pieces';
import Works from '../components/Home/Works';
import Faq from '../components/Home/Faq';
import Advisory from '../components/Home/Advisory';

import './HomeView.css';

function HomeView() {
  return (
    <div className="main home">
      <Hero />
      <About />
      <Pieces />
      <Works />
      <Faq />
      <Advisory />
    </div>
  );
}

export default HomeView;