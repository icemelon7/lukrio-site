import React from 'react';
import Splash from '../components/Splash';
import SideBySideHome from '../SideBySideHome';
import Podium from '../../assets/podium.png';

const HowToPlayPage = () => {

    return (
        <div className="play">
            <SideBySideHome
            header="How To Play"
            image={Podium}
            splashBackground
            noLink
            ></SideBySideHome>
            
        </div>
    )
}

export default HowToPlayPage;