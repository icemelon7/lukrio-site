import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import HeroImage from "./HeroImage.js";
import FeatureIconDisplay from "./FeatureIcon.js";
import SideBySide from './SideBySide.js';

function App() {
  return (
    <div className="LandingPage">
      <HeroImage></HeroImage>
      <SideBySide></SideBySide>
      <FeatureIconDisplay></FeatureIconDisplay>
    </div>
  );
}

export default App;
