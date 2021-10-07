import React, { useEffect, useRef, useState } from 'react';
import Balance from '../../assets/mockups/balance.png';
import BuyOrder from '../../assets/mockups/buyOrder.png';
import Create from '../../assets/mockups/create.png';
import CreatePrizes from '../../assets/mockups/createPrizes.png';
import Home from '../../assets/mockups/home.png';
import InviteFriendsLoading from '../../assets/mockups/inviteFriendsLoading.png';
import JoinGame from '../../assets/mockups/joinGame.png';
import Leaderboard from '../../assets/mockups/leaderboard.png';
import Lobby from '../../assets/mockups/lobby.png';
import PortfolioChart from '../../assets/mockups/portfolioChart.png';
import PortfolioPositions from '../../assets/mockups/portfolioPositions.png';
import PositionView from '../../assets/mockups/positionView.png';
import Search from '../../assets/mockups/search.png';
import StockCandleChart from '../../assets/mockups/stockCandleChart.png';
import '../../devices.css';
import TripleMockup from './mockupComponents/TripleMockup';
import "./TripleMockupCycle.styles.css";
import 'animate.css/animate.min.css';

const TripleMockupCycle = () => {
    
    const [active, setActive] = useState<number>(1);
    const [flick, setFlick] = useState<boolean>(false);
    let timer = useRef<NodeJS.Timeout>();
    let flickTimer = useRef<NodeJS.Timeout>();

    useEffect(() => {
        timer.current = setTimeout(() => {setFlick(false); setFlick(true); setActive(active + 1 > 5 ? 0 : active + 1)}, 5000);
        //setFlick(false);
        //setFlick(true);
        //flickTimer.current = setTimeout(() => setFlick(false), 1000);
        return () => {
            if (timer.current) {
                clearTimeout(timer.current);
            }
            if (flickTimer.current) {
                clearTimeout(flickTimer.current);
            }
        }
    }, [flick]);

    return (
        <div className={flick ? `triple__cycle animate__animated` : 'triple__cycle animate__animated animate__fadeInUp'}>
            {
                active === 1 ?            
                <TripleMockup firstMock={Home} firstMockIcon={"🕹️"} secondMock={Lobby} secondMockIcon={"🔍"} thirdMock={Create} thirdMockIcon={"🎨"}/>
                :
                active === 2 ?
                <TripleMockup firstMock={CreatePrizes} firstMockIcon={"💸"} secondMock={InviteFriendsLoading} secondMockIcon={"🤝"} thirdMock={JoinGame} thirdMockIcon={"💸"}/>
                :
                active === 3 ?
                <TripleMockup firstMock={Search} firstMockIcon={"🔍"} secondMock={StockCandleChart} secondMockIcon={"🚀"} thirdMock={BuyOrder} thirdMockIcon={"📦"}/>
                :
                active === 4 ? 
                <TripleMockup firstMock={PortfolioChart} firstMockIcon={"📈"} secondMock={PortfolioPositions} secondMockIcon={"🧭"} thirdMock={PositionView} thirdMockIcon={"🗺️"}/>
                :
                <TripleMockup firstMock={Leaderboard} firstMockIcon={"👑"} secondMock={PortfolioPositions} secondMockIcon={"💡"} thirdMock={Balance} thirdMockIcon={"💎"}/>
            }
        </div>
    )
}

export default TripleMockupCycle;