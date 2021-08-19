import React from 'react';
import Create from '../../assets/mockups/create.png';
import Home from '../../assets/mockups/home.png';
import Lobby from '../../assets/mockups/lobby.png';
import '../../devices.css';
import SideBySideFixed from '../components/SideBySideFixed';
import SideBySideHome from '../SideBySideHome';
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
            <SideBySideFixed
            imgPos="right" 
            firstMock={Home}
            secondMock={Lobby}
            thirdMock={Create}
            header="Choosing a Game"
            content={
                <div>

                </div>
            }
            />
        </div>
    )
}

export default HowToPlayPage;