import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNavigation from './Components/SideNavigation';
import Home from './Components/Home'
import React, { useState } from 'react'

function App() {

  return (
    <>
      <Home/>
      <SideNavigation />
    </>
  );
}

export default App;
