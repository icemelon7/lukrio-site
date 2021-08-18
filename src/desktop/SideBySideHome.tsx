import React, { FunctionComponent, useRef, useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SideBySide.css';
import '../App.css';
import Redirect from './components/Redirect';
import Home from '../assets/mockups/home.png';
import PortfolioPositions from '../assets/mockups/portfolioPositions.png';
import Leaderboard from '../assets/mockups/leaderboard.png';
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
    let timer = useRef<NodeJS.Timeout>();
    useEffect(() => {

        if (clicked) {
            setClicked(false);
            console.log("LONG");
            clearTimeout(timer?.current as NodeJS.Timeout);
            timer.current = setTimeout(() => setActiveNum(activeNum + 1 > 5 ? 1 : activeNum + 1), 4000);
        } else {
            timer.current = setTimeout(() => setActiveNum(activeNum + 1 > 5 ? 1 : activeNum + 1), 2000);
        }
        return () => {
            if (timer) {
                clearTimeout(timer?.current as NodeJS.Timeout);
            }
        }
    }, [activeNum, clicked]);

    return (
    <div ref={detailsRef} className="Desktop--SideBySide--container" style={splashBackground ? {color: 'white !important', background: 'linear-gradient(5deg, rgba(15,95,95,1) 0%, rgba(9,39,57,1) 50%)'} : {}}>
        {
            noLink ? 
            <div />
            :
            <Redirect text="Learn more on how to play" url="/about/how-to-play"/>
        }
        <div className="Desktop--SideBySide--text">
        <a href="how-to-play" style={splashBackground ? {color: 'aqua', cursor: 'auto'} : {}} className={`Desktop--SideBySide--header ${splashBackground ? "" : "link"}`}>{header}</a>
            <div className="Desktop--SideBySide--text__main" style={splashBackground ? responsiveImage ? {color: 'white', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'space-between', height: '85%'} : {color: 'white'} : {}}>
                <Row index={1} key={`HomeRow.1`} splashBackground={splashBackground} responsiveImage={responsiveImage} activeNum={activeNum} setActiveNum={setActiveNum} setClicked={setClicked} text="Choose one of many daily games"/>
                <Row index={2} key={`HomeRow.2`} splashBackground={splashBackground} responsiveImage={responsiveImage} activeNum={activeNum} setActiveNum={setActiveNum} setClicked={setClicked} text="Pay a cash buyin (e.g. $5) to join the game"/>
                <Row index={3} key={`HomeRow.3`} splashBackground={splashBackground} responsiveImage={responsiveImage} activeNum={activeNum} setActiveNum={setActiveNum} setClicked={setClicked} text="Make smart trades to grow your portfolio"/>
                <Row index={4} key={`HomeRow.4`} splashBackground={splashBackground} responsiveImage={responsiveImage} activeNum={activeNum} setActiveNum={setActiveNum} setClicked={setClicked} text="Get ranked by return in game's leaderboard"/>
                <Row index={5} key={`HomeRow.5`} splashBackground={splashBackground} responsiveImage={responsiveImage} activeNum={activeNum} setActiveNum={setActiveNum} setClicked={setClicked} text="Win cash prizes based on your rank"/>
            </div>
        </div>
        {
            responsiveImage ?
            <div className="device device-iphone-x play-phone">
                <div className="device-frame">
                    <img src={
                        activeNum === 1 ? Home : activeNum === 2 ? PortfolioPositions : Leaderboard
                    } alt="" style={{width: '100%', height: '100%', borderRadius: '5%'}}/>
                </div>
                <div className="device-stripe"></div>
                <div className="device-header"></div>
                <div className="device-sensors"></div>
                <div className="device-btns"></div>
                <div className="device-power"></div>
            </div>
            :
            typeof image === 'string' ?
            <img className="Desktop--SideBySide--image__container" src={image} alt={image}/>
            :
            image
        }
        
    </div>
    )
}

const Row = ({activeNum, setActiveNum, setClicked, index, text, responsiveImage, splashBackground} : {activeNum : number, setActiveNum: (x: number) => void, setClicked: (x: boolean) => void, index: number, text: string, responsiveImage?: boolean, splashBackground?: boolean}) => {

    return (
        <div onClick={() => {setActiveNum(index); setClicked(true)}} style={splashBackground ? {fontSize: '2.3vw'} : {fontSize: '1.8vw'}} className={activeNum === index ? "home-row" : "home-row low-opacity"}>
            <div className="circle">{index}</div>
            <div>{text}</div>
        </div>
    )
}

export default SideBySideHome;