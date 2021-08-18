import React from 'react';
import Splash from '../components/Splash';
import SideBySideHome from '../SideBySideHome';
import Podium from '../../assets/podium.png';
import '../../devices.css';
import './HowToPlayPage.styles.css';

const HowToPlayPage = () => {

    return (
        <div className="play">
            <SideBySideHome
            header="How To Play"
            responsiveImage
            splashBackground
            noLink
            ></SideBySideHome>

        </div>
    )
}

export default HowToPlayPage;