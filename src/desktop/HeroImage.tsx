import React, { useEffect, useState } from 'react';
import Logo from "./assets/logo.png";
import Mockup from "./assets/mockup.png";
import "./HeroImage.css";
import video from '../assets/backdrop.mp4';

const HeroImage = ({demoRef, detailsRef} : {demoRef: any, detailsRef: any}) => {

  const _handleDemoScroll = () => {
    console.log("SCROLL");
    window.scrollTo({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth'
    });
  }

  const _handleDetailsScroll = () => {
    detailsRef.current.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className="Desktop--Main">
      <video id="background-video" autoPlay muted loop>
        <source src={video} type="video/mp4"/>
      </video>
      <div className="Desktop--TextBox">
        <div className="Desktop--Button Desktop--Fill" onClick={_handleDetailsScroll}>
          More Details
        </div>
        <div className="Desktop--Button" onClick={_handleDemoScroll}>
          Beta Demo
        </div>
      </div>
    </div>
  );
}

export default HeroImage;