import React, { FunctionComponent, useEffect } from 'react';
import Create from '../../assets/mockups/create.png';
import Home from '../../assets/mockups/home.png';
import Lobby from '../../assets/mockups/lobby.png';
import CreatePrizes from '../../assets/mockups/createPrizes.png';
import Analytics from '../../assets/mockups/analytics.png';
import Error from '../../assets/mockups/error.png';
import InviteFriendsLoading from '../../assets/mockups/inviteFriendsLoading.png';
import Notifications from '../../assets/mockups/notifications.png';
import ShortOrder from '../../assets/mockups/shortOrder.png';
import PortfolioPositions from '../../assets/mockups/portfolioPositions.png';
import BuyOrder from '../../assets/mockups/buyOrder.png';
import Leaderboard from '../../assets/mockups/leaderboard.png';
import PortfolioChart from '../../assets/mockups/portfolioChart.png';
import Search from '../../assets/mockups/search.png';
import StockCandleChart from '../../assets/mockups/stockCandleChart.png';
import '../../devices.css';
import SideBySideFixed from '../components/SideBySideFixed';
import SideBySideHome from '../SideBySideHome';
import './HowToPlayPage.styles.css';
import Game from '../../assets/playIcons/gaming.png';
import Gambling from '../../assets/playIcons/gambling.png';
import ScrollAnimation from 'react-animate-on-scroll';

const HowToPlayPage = () => {

    useEffect(() => {
        const canvas = document.getElementById('canvas') as any
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'green';
        ctx.fillRect(0, 0, 50, 500);
    }, []);

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
            <SideBySideFixed
            imgPos="left"
            firstMock={CreatePrizes}
            firstMockIcon="🏆"
            secondMock={InviteFriendsLoading}
            secondMockIcon="🤝"
            thirdMock={Create}
            thirdMockIcon="💸"
            header={
                <div style={{display: 'flex', alignItems: 'center', fontSize: '3vw', fontWeight: 700, color: 'var(--teal-color)'}}> 
                    <img src={Gambling} alt="Icon" style={{marginRight: '5vw', zoom: 0.6}}/>
                    Joining a Game
                </div>
            }
            content={
                <div className="play__content">
                    <Row emoji="🏆" text="Create a game with unique prize distribution - choose your own" delay={250}/>
                    <Row emoji="🤝" text="Invite Friends" delay={500}/>
                    <Row emoji="👑🚀🍪💸"text="Different Buyins - Money wings" delay={750}/>
                </div>
            }
            />
            <canvas id="canvas" className="canvas">
            </canvas>
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