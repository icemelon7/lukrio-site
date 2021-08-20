import React, { FunctionComponent, useEffect, useState } from 'react';
import Logo from "./assets/logo.png";
import Mockup from "./assets/mockup.png";
import "./HeroImage.css";
import video from '../assets/backdrop.mp4';
import {ReactComponent as AppleStore} from '../assets/stores/apple.svg';
import {ReactComponent as GoogleStore} from '../assets/stores/google.svg';
import Stores from './components/Stores';

type HeroImageProps = {
  demoRef: any;
  detailsRef: any;
  liveStore?: boolean;
}

const HeroImage : FunctionComponent<HeroImageProps> = ({demoRef, detailsRef, liveStore}) => {

  const _handleDemoScroll = () => {
    demoRef.current?.scrollIntoView({behavior: 'smooth'});
  }

  const _handleDetailsScroll = () => {
    detailsRef.current?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className="Desktop--Main">
      <video id="background-video" autoPlay muted loop>
        <source src={video} type="video/mp4"/>
      </video>
      <div className="Desktop--TextBox">
        {
          liveStore ?
          <Stores />
          :
          <>
            <div className="Desktop--Button Desktop--Fill" onClick={_handleDetailsScroll}>
              More Details
            </div>
            <div className="Desktop--Button" onClick={_handleDemoScroll}>
              Beta Demo
            </div>
          </>
        }
        
      </div>
    </div>
  );
}

export default HeroImage;