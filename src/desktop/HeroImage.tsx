import React, { FunctionComponent, useEffect, useState } from 'react';
import Logo from "./assets/logo.png";
import Mockup from "./assets/mockup.png";
import "./HeroImage.css";
import video from '../assets/backdrop.mp4';
import {ReactComponent as AppleStore} from '../assets/stores/apple.svg';
import {ReactComponent as GoogleStore} from '../assets/stores/google.svg';
import Stores from './components/Stores';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useCookies } from 'react-cookie';
import { getSignupInfo, sendBetaSignup } from '../fetchers/betaSignup';
import BetaSignup from './components/BetaSignup';

type HeroImageProps = {
  demoRef: any;
  detailsRef: any;
  isBeta?: boolean;
}

const HeroImage : FunctionComponent<HeroImageProps> = ({demoRef, detailsRef, isBeta}) => {

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
          !isBeta ?
          <Stores />
          :
          true
          ?
          <BetaSignup />
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