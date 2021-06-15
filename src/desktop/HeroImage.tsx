import React, { useState } from 'react';
import Logo from "./assets/logo.png";
import Mockup from "./assets/mockup.png";
import "./HeroImage.css";
import video from '../assets/backdrop.mp4';

const HeroImage = ({}) => {
  return (
    <div className="Desktop--Main">
      <video id="background-video" autoPlay muted loop>
        <source src={video} type="video/mp4"/>
      </video>
    </div>
  );
}

export default HeroImage;