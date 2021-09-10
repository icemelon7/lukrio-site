import React, { FunctionComponent } from 'react';
import './LandingBackground.styles.css';
import video from '../../assets/backdrop.mp4';
import BetaSignup from '../../desktop/components/BetaSignup';

type LandingBackgroundProps = {
    isBeta?: boolean;
}

const LandingBackground : FunctionComponent<LandingBackgroundProps> = ({isBeta}) => {

    return (
        <div className="landing">
            <video id="background-video" playsInline autoPlay muted loop>
                <source src={video} type="video/mp4"/>
            </video>
            <a className="landing__button" href="/referral">
                Play Now
            </a>
        </div>
    )
}

export default LandingBackground;