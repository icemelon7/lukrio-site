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
import {ReactComponent as AbsReturn } from '../../assets/playIcons/abs_return_color_bg.svg';
import {ReactComponent as Equities } from '../../assets/playIcons/equities_color_bg.svg';

import ScrollAnimation from 'react-animate-on-scroll';
import ScrollMagic from 'scrollmagic';
import {TimelineMax, TweenMax} from 'gsap';
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows';

const HowToPlayPage = () => {
    /*
    const updateXarrow = useXarrow();

    useEffect(() => {
        const canvas = document.getElementById('canvas') as any;
        const ctx = canvas.getContext('2d');
        canvas.width = '100vw';
        canvas.height = '100vh';
        const points = document.getElementsByClassName('play__point');
        let x1 = points[0].getBoundingClientRect().left;
        let y1 = points[0].getBoundingClientRect().top;
        let x2 = points[1].getBoundingClientRect().left;
        let y2 = points[1].getBoundingClientRect().top;
        console.log(x1, y1, x2, y2);
        // use points to draw curve
        // to add scroll, maybe add div with lower zIndex and reduce height on scroll, position absolute on bottom
        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.moveTo(points[0].getBoundingClientRect().left, points[0].getBoundingClientRect().top);
        ctx.bezierCurveTo(0, 100, 200, 100, 300, 0);
        ctx.stroke();
        /*ctx.moveTo(points[0].getBoundingClientRect().left, points[0].getBoundingClientRect().top);
        for (let i = 1; i < points.length - 2; i ++)
        {
            var xc = (points[i].getBoundingClientRect().left + points[i + 1].getBoundingClientRect().left) / 2;
            var yc = (points[i].getBoundingClientRect().top + points[i + 1].getBoundingClientRect().top) / 2;
            ctx.quadraticCurveTo(points[i].getBoundingClientRect().left, points[i].getBoundingClientRect().top, xc, yc);
        }
        // curve through the last two points
        //ctx.quadraticCurveTo(points[i].x, points[i].y, points[i+1].x,points[i+1].y);
    }, []);
    */
    return (
        <Xwrapper>
        <div className="play">
            <SideBySideHome
            header="How To Play 🚀"
            responsiveImage
            splashBackground
            noLink
            ></SideBySideHome>
            <div style={{position: 'relative'}}>
            <SideBySideFixed
            index={1}
            imgPos="right" 
            firstMock={Home}
            firstMockIcon="🕹️"
            secondMockIcon="🔍"
            thirdMockIcon="🎨"
            secondMock={Lobby}
            thirdMock={Create}
            header={
                <div style={{display: 'flex', alignItems: 'center', fontSize: '3vw', fontWeight: 700, color: '#51b69a'}}> 
                    <img src={Game} alt="Game Icon" style={{marginRight: '5vw', zoom: 0.6}} className="play__point" id="play__point__1"/>
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
            index={2}
            imgPos="left"
            firstMock={CreatePrizes}
            firstMockIcon="🏆"
            secondMock={InviteFriendsLoading}
            secondMockIcon="🤝"
            thirdMock={Create} // join game view
            thirdMockIcon="💸"
            header={
                <div style={{display: 'flex', alignItems: 'center', fontSize: '3vw', fontWeight: 700, color: '#51b69a'}}> 
                    <img src={Gambling} alt="Icon" style={{marginRight: '5vw', zoom: 0.6}} className="play__point" id="play__point__2"/>
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
            index={3}
            imgPos="right"
            firstMock={Search}
            firstMockIcon="🔍"
            secondMock={StockCandleChart}
            secondMockIcon="🚀"
            thirdMock={BuyOrder}
            thirdMockIcon="📦"
            header={
                <div style={{display: 'flex', alignItems: 'center', width: '100%', fontSize: '3vw', fontWeight: 700, color: '#51b69a'}}> 
                    {// Look at Icons for Create Game in Figma same style
                    }
                    <AbsReturn style={{marginRight: '1vw', width: '30%', height: 'auto', objectFit: 'contain'}} className="play__point" id="play__point__3"/>
                    Make Smart Trades
                </div>
            }
            content={
                <div className="play__content">
                    <Row emoji="🔍"text="Search for US and EU equities (stocks) or ETFs to go long or short. Options, Crypto and more coming soon." delay={250}/>
                    <Row emoji="🚀" text="Find the next GME using candlestick chart and stock feed to discuss with competitors and see their trades." delay={500}/>
                    <Row emoji="📦" text="Submit market or limit orders to buy or sell (including short sell) based on real live market data." delay={750}/>
                </div>
            }
            />            
            <SideBySideFixed
            index={4}
            imgPos="left"
            firstMock={PortfolioChart}
            firstMockIcon="📈"
            secondMock={PortfolioPositions}
            secondMockIcon="🧭"
            thirdMock={Leaderboard}// single position view, ENSURE order of images and order of rows, and update icons
            thirdMockIcon="🗺️"
            header={
                <div style={{display: 'flex', alignItems: 'center', fontSize: '3vw', fontWeight: 700, color: '#51b69a'}}> 
                    {// Look at Icons for Create Game in Figma same style
                    }
                    <Equities style={{marginRight: '1vw', width: '30%', height: 'auto', objectFit: 'contain'}} className="play__point" id="play__point__4"/>
                    Generate Returns
                </div>
            }
            content={
                <div className="play__content">
                    <Row emoji="📈"text="Analyze your portfolio and trade to maximize your performance metric (absolute return or sharpe ratio)." delay={250}/>
                    <Row emoji="🧭" text="Track performance of each position and see in one glance who your winners and losers are." delay={500}/>
                    <Row emoji="🗺️" text="View, modify or cancel trades for any position and manage your exposure to sectors and factors." delay={750}/>
                </div>
            }
            />
            <SideBySideFixed
            index={5}
            imgPos="right"
            firstMock={Leaderboard}
            firstMockIcon="👑"
            secondMock={PortfolioPositions}//resultView
            secondMockIcon="💡"
            thirdMock={Analytics} // Balance View with modal showing Venmo and other options
            thirdMockIcon="💎"
            header={
                <div style={{display: 'flex', alignItems: 'center', fontSize: '3vw', fontWeight: 700, color: '#51b69a'}}> 
                    {// Look at Icons for Create Game in Figma same style
                    }
                    <img src={Gambling} alt="Icon" style={{marginRight: '5vw', zoom: 0.6}} className="play__point" id="play__point__5"/>
                    Profit & Learn
                </div>
            }
            content={
                <div className="play__content">
                    <Row emoji="👑"text="Win a percentage of the cash prize pool based on your performance tracked in the game's leaderboard." delay={250}/>
                    <Row emoji="💡" text="Receive customized portfolio feedback based on your trades and view statistics on your investing style." delay={500}/>
                    <Row emoji="💎" text="Withdraw or Deposit cash into Lukrio via Venmo. Turn your free $5 starting balance into $5,000." delay={750}/>
                </div>
            }
            />
             <SideBySideFixed
             index={6}
            imgPos="left"
            firstMock={Analytics}
            firstMockIcon="🔮"
            secondMock={Notifications}//resultView
            secondMockIcon="🛎️"
            thirdMock={Error}
            thirdMockIcon="🧰"
            header={
                <div style={{display: 'flex', alignItems: 'center', fontSize: '3vw', fontWeight: 700, color: '#51b69a'}}> 
                    {// Look at Icons for Create Game in Figma same style
                    }
                    <img src={Gambling} alt="Icon" style={{marginRight: '5vw', zoom: 0.6}} className="play__point" id="play__point__6"/>
                    Extra Tools
                </div>
            }
            content={
                <div className="play__content">
                    {//bell emoji 2nd
                    }
                    <Row emoji="🔮"text="See what others on the Lukrio platform are investing in and get a feel for market sentiment." delay={250}/>
                    <Row emoji="🛎️" text="Get live notifications when your orders are filled, players join, competitors make large trades and more. " delay={500}/>
                    <Row emoji="🧰" text="In our beta test everything worked. Nonetheless, if something breaks let us know and we will fix it asap." delay={750}/>
                </div>
            }
            />    
            </div>
            {//<ScrollAnimation animateIn="animate__fadeIn" animateOnce delay={2500}>
            
            //<Xarrow 
            //start={'play__point__1'}
            //end={'play__point__2'}
            ///>  
            }
            {//</ScrollAnimation>            
            //<canvas id="canvas" style={{position: 'absolute', width: '100vw', height: '100vh'}} />
            }
        </div>
        </Xwrapper>
        
    )
}

type RowProps = {
    icon?: string | JSX.Element;
    emoji?: string;
    text: string | JSX.Element;
    delay: number;
    multi?: boolean;
}

export const Row : FunctionComponent<RowProps> = ({icon, text, delay, emoji, multi}) => {
    return (
        <ScrollAnimation offset={0} animateIn="animate__fadeInUp" animateOnce={multi ? false : true} delay={delay} className="play__row">
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