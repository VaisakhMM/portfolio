import React from 'react';
import Navbar from './Navbar';
import Home from './home';
import Education from './Education';
import Skills from './Skills';
import Projects from './Project';
import Contact from './contact';
import './portfolio.css'   // for whatsapp in index.html

const Main = () => {
  return (
    <div>
      <Navbar />
      <div id="home"><Home /></div>
      <div id="education"><Education /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
};

export default Main;
