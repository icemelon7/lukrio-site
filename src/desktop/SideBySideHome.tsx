import React, { FunctionComponent, useRef, useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SideBySide.css';
import '../App.css';
import Redirect from './components/Redirect';
import Home from '../assets/mockups/home.png';
import PortfolioPositions from '../assets/mockups/portfolioPositions.png';
import Leaderboard from '../assets/mockups/leaderboard.png';
import JoinGame from '../assets/mockups/joinGame.png';
import Balance from '../assets/mockups/balance.png'
import 'animate.css';
import MockupPhone from './components/mockupComponents/MockupPhone';
import ScrollAnimation from 'react-animate-on-scroll';

//Need join pop up view, need result view

type SideBySideHomeProps = {
    detailsRef?: any;
    header: string;
    image?: string | JSX.Element;
    splashBackground?: boolean;
    noLink?: boolean;
    responsiveImage?: boolean;
}

const SideBySideHome : FunctionComponent<SideBySideHomeProps> = ({detailsRef, header, image, splashBackground, noLink, responsiveImage}) => {
    const [activeNum, setActiveNum] = useState<number>(1);
    const [clicked, setClicked] = useState<boolean>(false);
    const [flick, setFlick] = useState<boolean>(false);
    let first = true;
    let timer = useRef<NodeJS.Timeout>();
    let flickTimer = useRef<NodeJS.Timeout>();
    console.log(window.innerHeight);
    useEffect(() => {

        if (clicked) {
            setClicked(false);
            console.log("LONG");
            clearTimeout(timer?.current as NodeJS.Timeout);
            timer.current = setTimeout(() => setActiveNum(activeNum + 1 > 5 ? 1 : activeNum + 1), 4000);
        } else {
            timer.current = setTimeout(() => setActiveNum(activeNum + 1 > 5 ? 1 : activeNum + 1), 1500 + (first ? 2000 : 0));
        }
        first = false;
        setFlick(false);
        setFlick(true);
        flickTimer.current = setTimeout(() => setFlick(false), 1000);
        return () => {
            if (timer.current) {
                clearTimeout(timer?.current as NodeJS.Timeout);
            }
            if (flickTimer.current) {
                clearTimeout(flickTimer?.current as NodeJS.Timeout);
            }
        }
    }, [activeNum, clicked]);
    return (
    <div ref={detailsRef} className="Desktop--SideBySide--container" style={splashBackground ? window.innerWidth < 1024 ? {paddingTop: '10vh', color: 'white !important', background: 'linear-gradient(5deg, rgba(15,95,95,1) 0%, rgba(9,39,57,1) 50%)'} : {maxHeight: '80vh', color: 'white !important', background: 'linear-gradient(5deg, rgba(15,95,95,1) 0%, rgba(9,39,57,1) 50%)'} : {}}>
        {
            noLink ? 
            <div />
            :
            <ScrollAnimation animateIn="animate__fadeIn" animateOnce delay={1200}><Redirect text="Learn more on how to play" url="/how-to-play"/></ScrollAnimation>
        }
        <ScrollAnimation offset={0} animateIn="animate__fadeInLeft" animateOnce className="Desktop--SideBySide--text">
            {splashBackground ? 
            <div style={{color: '#51b69a', cursor: 'auto', fontSize: window.innerWidth < 1024 ? '1.7em' : '5vw', textDecoration: 'underline'}} className="Desktop--SideBySide--header">{header}</div>
            :
            <a href={"/how-to-play"} className={`Desktop--SideBySide--header link`}>{header}</a>
            }
            
            <div className="Desktop--SideBySide--text__main" style={responsiveImage ? splashBackground ? {color: 'white', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center'} : {display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center'} : {}}>
                <Row index={1} key={`HomeRow.1`} delay={200} splashBackground={splashBackground} responsiveImage={responsiveImage} activeNum={activeNum} setActiveNum={setActiveNum} setClicked={setClicked} text="Choose one of many daily games"/>
                <Row index={2} key={`HomeRow.2`} delay={400} splashBackground={splashBackground} responsiveImage={responsiveImage} activeNum={activeNum} setActiveNum={setActiveNum} setClicked={setClicked} text="Pay a cash buyin (e.g. $5) to join the game"/>
                <Row index={3} key={`HomeRow.3`} delay={600} splashBackground={splashBackground} responsiveImage={responsiveImage} activeNum={activeNum} setActiveNum={setActiveNum} setClicked={setClicked} text="Make smart trades to grow your portfolio"/>
                <Row index={4} key={`HomeRow.4`} delay={800} splashBackground={splashBackground} responsiveImage={responsiveImage} activeNum={activeNum} setActiveNum={setActiveNum} setClicked={setClicked} text="Get ranked by return in game's leaderboard"/>
                <Row index={5} key={`HomeRow.5`} delay={1000} splashBackground={splashBackground} responsiveImage={responsiveImage} activeNum={activeNum} setActiveNum={setActiveNum} setClicked={setClicked} text="Win cash prizes based on your rank"/>
            </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInRight" animateOnce offset={0}>
        {
            responsiveImage ?
            <MockupPhone 
            style={window.innerWidth < 1024 ? {zoom: 0.4 * (window.innerHeight / 900), marginLeft: '3vw'} : {zoom: 0.7 * (window.innerHeight / 900), marginLeft: '10vw'}}
            content={
                <img
                className={`animate__animated ${flick ? 'animate__zoomIn' : ''}`}
                src={activeNum === 1 ? Home : activeNum === 2 ? JoinGame : activeNum === 3 ? PortfolioPositions : activeNum === 4 ? Leaderboard : activeNum === 5 ? Balance : Home}
                alt="" style={{width: '100%', height: '100%', borderRadius: '5%'}}/>}
            isRotate
            onClick={() => activeNum === 1 ? true : false}
            />
            :
            typeof image === 'string' ?
            <img className="Desktop--SideBySide--image__container" src={image} alt={image}/>
            :
            image
        }
        </ScrollAnimation>        
    </div>
    )
}

const Row = ({activeNum, setActiveNum, setClicked, index, text, responsiveImage, splashBackground, delay} : {activeNum : number, setActiveNum: (x: number) => void, setClicked: (x: boolean) => void, index: number, text: string, responsiveImage?: boolean, splashBackground?: boolean, delay: number}) => {

    return (
        <ScrollAnimation animateIn="animate__fadeInUp" animateOnce delay={delay}>
            <div onClick={() => {setActiveNum(index); setClicked(true)}} style={window.innerWidth < 1024 ? splashBackground ? {fontSize: '0.8em'} : {fontSize: '0.8em'}: splashBackground ? {fontSize: '2.3vw'} : {fontSize: '1.8vw'}} className={activeNum === index ? "home-row" : "home-row low-opacity"}>
                <div className="circle">{index}</div>
                <div style={window.innerWidth < 1024 ? {fontWeight: 500, width: '37vw'} : {}}>{text}</div>
            </div>
        </ScrollAnimation>
        
    )
}

export default SideBySideHome;