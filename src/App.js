import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNavigation from './Components/SideNavigation';
import Home from './Components/Home'
import React from 'react'
import About from './Components/About';
import Facts from './Components/Facts';
import Resume from './Components/Resume';
import Skills from './Components/Skills';

function App() {

  
  return (
    <>
      <Home/>
      <About/>
      <Facts/>
      <Resume/>
      <Skills/>
      <SideNavigation />
    </>
  );
}

export default App;
