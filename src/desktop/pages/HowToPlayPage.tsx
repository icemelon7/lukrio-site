import React, { FunctionComponent } from 'react';
import Create from '../../assets/mockups/create.png';
import Home from '../../assets/mockups/home.png';
import Lobby from '../../assets/mockups/lobby.png';
import '../../devices.css';
import SideBySideFixed from '../components/SideBySideFixed';
import SideBySideHome from '../SideBySideHome';
import './HowToPlayPage.styles.css';
import Game from '../../assets/playIcons/gaming.png';
import ScrollAnimation from 'react-animate-on-scroll';

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
            firstMockIcon="🕹️"
            secondMockIcon="🔍"
            thirdMockIcon="🎨"
            secondMock={Lobby}
            thirdMock={Create}
            header={
                <div style={{display: 'flex', alignItems: 'center', fontSize: '3vw', fontWeight: 700, color: 'var(--teal-color)'}}> 
                    <img src={Game} alt="Game Icon" style={{marginRight: '5vw', zoom: 0.6}}/>
                    Choosing a Game
                </div>
            }
            content={
                <div className="play__content">
                    <Row emoji="🕹️" text="Explore lobbies with different cash buyins, prize distributions, performance metrics and duration." delay={250}/>
                    <Row emoji="🔍" text="Check out lobbies to see who you are competing against and choose to play with friends or strangers." delay={500}/>
                    <Row emoji="🎨" text="Don't like the games on offer? Create your own game with customized cash buyin, prize distribution, etc." delay={750}/>
                </div>
            }
            />
        </div>
    )
}

type RowProps = {
    icon?: string | JSX.Element;
    emoji?: string;
    text: string;
    delay: number;
}

const Row : FunctionComponent<RowProps> = ({icon, text, delay, emoji}) => {

    return (
        <ScrollAnimation animateIn="animate__fadeInUp" animateOnce delay={delay} className="play__row">
            {
                icon 
                ?
                typeof icon === 'string' ? 
                <img src={icon} alt={icon} style={{}}/>
                :
                icon
                :
                <div className="play__row__icon-emoji">{emoji}</div>
            }
            <div className="play__row__text">{text}</div>
        </ScrollAnimation>
    )
}

export default HowToPlayPage;