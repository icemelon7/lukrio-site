import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import HeroImage from "./HeroImage.js"
import FeatureIconDisplay from "./FeatureIcon.js"

function App() {
  return (
    <div className="LandingPage">
      <HeroImage></HeroImage>
      <FeatureIconDisplay></FeatureIconDisplay>
    </div>
  );
}

export default App;
