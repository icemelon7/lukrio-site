import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import HeroImage from "./HeroImage";
import FeatureIconDisplay from "./FeatureIcon";
import SideBySide from './SideBySide';
import SideBySideFlipped from './SideBySideFlipped';

import Podium from '../assets/podium.png'; 
import Rocket from '../assets/rocket.png';
import SignupSideBySide from './SignupSideBySide';

function Desktop() {
  return (
    <div className="LandingPage">
      <HeroImage></HeroImage>
      <SignupSideBySide />
      <SideBySide
      header="Compete with friends"
      text="Prove your mettle and compete for prizes against investors from around the world in skill-based competitions designed for all types of investors."
      image={Podium}
      ></SideBySide>

      <SideBySideFlipped
      header="Discover new investing ideas"
      text="Maybe you have an idea you want to share with others. Or maybe you want to find the next big thing. Our community to designed to provide you with the hottest stock picks in a visual way."
      image={Rocket}
      ></SideBySideFlipped>
      <FeatureIconDisplay></FeatureIconDisplay>
    </div>
  );
}

export default Desktop;
