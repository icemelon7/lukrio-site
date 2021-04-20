import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import HeroImage from "./HeroImage.js";
import FeatureIconDisplay from "./FeatureIcon.js";
import SideBySide from './SideBySide.js';
import SideBySideFlipped from './SideBySideFlipped.js';

import GamifiedInvesting from './assets/Gamified_Investing.png';
import Education from './assets/Education.png';
import Tournaments from './assets/Tournaments.png';
import Social from './assets/Social.png';

import Podium from './assets/podium.png';
import Rocket from './assets/rocket.png';

function App() {
  return (
    <div className="LandingPage">
      <HeroImage></HeroImage>
      <SideBySide
      header="Gamified Investing"
      text="Prove your mettle and compete with your friends in fantasy sports for stocks. Join with entry fees as low as $1, make trades that outperform, and win cash!"
      image={GamifiedInvesting}
      ></SideBySide>

      <SideBySideFlipped
      header="Learn, Play, and Earn"
      text="With feedback tailored to your in-game decisions, become a smarter and better investor while earning money in the process."
      image={Education}
      ></SideBySideFlipped>

      <SideBySide
      header="Compete in Tournaments Large and Small"
      text="If you're ready for the big leagues, play online in public games to truly prove your skill. Follow in the footsteps of top-tier players to earn cash and show off your skills!"
      image={Tournaments}
      ></SideBySide>

      <SideBySideFlipped
      header="Discover New Ideas and Share your Progress"
      text="Maybe you have an idea you want to share with others. Or maybe you want to find the next big thing. Our community to designed to provide you with the hottest stock picks in a visual way. No more walls of text!"
      image={Social}
      ></SideBySideFlipped>
      <FeatureIconDisplay></FeatureIconDisplay>
    </div>
  );
}

export default App;
