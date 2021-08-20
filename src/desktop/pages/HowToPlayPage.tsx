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
import ScrollMagic from 'scrollmagic';
import {TimelineMax, TweenMax} from 'gsap';

const HowToPlayPage = () => {

    useEffect(() => {
        //const canvas = document.getElementById('canvas') as any
        //const ctx = canvas.getContext('2d');
        //const points = document.getElementsByClassName('play__point');
        // use points to draw curve
        // to add scroll, maybe add div with lower zIndex and reduce height on scroll, position absolute on bottom
    }, []);

    return (
        <div className="play">
            <SideBySideHome
            header="How To Play 🚀"
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
                    <img src={Game} alt="Game Icon" style={{marginRight: '5vw', zoom: 0.6}} className="play__point"/>
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
            thirdMock={Create} // join game view
            thirdMockIcon="💸"
            header={
                <div style={{display: 'flex', alignItems: 'center', fontSize: '3vw', fontWeight: 700, color: 'var(--teal-color)'}}> 
                    <img src={Gambling} alt="Icon" style={{marginRight: '5vw', zoom: 0.6}} className="play__point"/>
                    Joining a Game
                </div>
            }
            content={
                <div className="play__content">
                    <Row emoji="💸"text="Join a game by paying the game's buyin. The buyins of all the game's players is the cash prize pool." delay={250}/>
                    <Row emoji="🤝" text="Invite your friends to play with you by searching for their name or sharing the game's quick join ID." delay={500}/>
                    <Row emoji="🏆" text="Choose what prize distribution you want. Should the winner take all or the top 3 be rewarded equally. " delay={750}/>

                </div>
            }
            />
            <SideBySideFixed
            imgPos="right"
            firstMock={Search}
            firstMockIcon="🔍"
            secondMock={StockCandleChart}
            secondMockIcon="🚀"
            thirdMock={BuyOrder}
            thirdMockIcon="💸"
            header={
                <div style={{display: 'flex', alignItems: 'center', fontSize: '3vw', fontWeight: 700, color: 'var(--teal-color)'}}> 
                    {// Look at Icons for Create Game in Figma same style
                    }
                    <img src={Gambling} alt="Icon" style={{marginRight: '5vw', zoom: 0.6}} className="play__point"/>
                    Make Smart Trades
                </div>
            }
            content={
                <div className="play__content">
                    <Row emoji="🔍"text="Search for US and EU equities (stocks) or ETFs to go long or short. Options, Crypto and more coming soon." delay={250}/>
                    <Row emoji="🚀" text="Find the next GME using candlestick chart and stock feed to discuss with competitors and see their trades." delay={500}/>
                    <Row emoji="👑🍪" text="Submit market or limit orders to buy or sell (including short sell) based on real live market data." delay={750}/>
                </div>
            }
            />            
            <SideBySideFixed
            imgPos="left"
            firstMock={PortfolioChart}
            firstMockIcon="🔍"
            secondMock={PortfolioPositions}
            secondMockIcon="🤝"
            thirdMock={Leaderboard}// single position view, ENSURE order of images and order of rows, and update icons
            thirdMockIcon="💸"
            header={
                <div style={{display: 'flex', alignItems: 'center', fontSize: '3vw', fontWeight: 700, color: 'var(--teal-color)'}}> 
                    {// Look at Icons for Create Game in Figma same style
                    }
                    <img src={Gambling} alt="Icon" style={{marginRight: '5vw', zoom: 0.6}} className="play__point"/>
                    Generate Returns
                </div>
            }
            content={
                <div className="play__content">
                    <Row emoji="🔍"text="Analyze your portfolio and trade to maximize your performance metric (absolute return or sharpe ratio)." delay={250}/>
                    <Row emoji="🚀" text="Track performance of each position and see in one glance who your winners and losers are." delay={500}/>
                    <Row emoji="👑🍪" text="View, modify or cancel trades for any position and manage your exposure to sectors and factors." delay={750}/>
                </div>
            }
            />
            <SideBySideFixed
            imgPos="right"
            firstMock={Leaderboard}
            firstMockIcon="🔍"
            secondMock={PortfolioPositions}//resultView
            secondMockIcon="🤝"
            thirdMock={Analytics} // Balance View with modal showing Venmo and other options
            thirdMockIcon="💸"
            header={
                <div style={{display: 'flex', alignItems: 'center', fontSize: '3vw', fontWeight: 700, color: 'var(--teal-color)'}}> 
                    {// Look at Icons for Create Game in Figma same style
                    }
                    <img src={Gambling} alt="Icon" style={{marginRight: '5vw', zoom: 0.6}} className="play__point"/>
                    Profit & Learn
                </div>
            }
            content={
                <div className="play__content">
                    <Row emoji="🔍"text="Win a percentage of the cash prize pool based on your performance tracked in the game's leaderboard." delay={250}/>
                    <Row emoji="🚀" text="Receive customized portfolio feedback based on your trades in game and view statistics on your investing style." delay={500}/>
                    <Row emoji="🍪" text="Withdraw or Deposit cash into Lukrio via Venmo. Turn your free $5 starting balance into $5,000." delay={750}/>
                </div>
            }
            />
             <SideBySideFixed
            imgPos="left"
            firstMock={Analytics}
            firstMockIcon="🔍"
            secondMock={Notifications}//resultView
            secondMockIcon="🤝"
            thirdMock={Error}
            thirdMockIcon="💸"
            header={
                <div style={{display: 'flex', alignItems: 'center', fontSize: '3vw', fontWeight: 700, color: 'var(--teal-color)'}}> 
                    {// Look at Icons for Create Game in Figma same style
                    }
                    <img src={Gambling} alt="Icon" style={{marginRight: '5vw', zoom: 0.6}} className="play__point"/>
                    Extra Tools
                </div>
            }
            content={
                <div className="play__content">
                    {//bell emoji 2nd
                    }
                    <Row emoji="🔍"text="See what others on the Lukrio platform are investing in and get a feel for market sentiment." delay={250}/>
                    <Row emoji="🚀" text="Get live notifications when your orders are filled, players join, competitors make large trades and more. " delay={500}/>
                    <Row emoji="👑🍪" text="In our beta test everything worked. Nonetheless, if something breaks let us know and we will fix it asap." delay={750}/>
                </div>
            }
            />                      
            {
                //<canvas id="canvas" />
            }
            
        </div>
    )
}

type RowProps = {
    icon?: string | JSX.Element;
    emoji?: string;
    text: string | JSX.Element;
    delay: number;
}

export const Row : FunctionComponent<RowProps> = ({icon, text, delay, emoji}) => {

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
            {
                typeof text === 'string' ?
                <div className="play__row__text">{text}</div>
                :
                text
            }
        </ScrollAnimation>
    )
}

export default HowToPlayPage;