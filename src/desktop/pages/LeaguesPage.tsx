import React from 'react';
import { LightMode } from '../../Colors';
import Splash from '../components/Splash';
import './LeaguesPage.styles.css';
import {ReactComponent as Cycling} from '../../assets/figmaIcons/cycling.svg';
import Leagues from '../views/Leagues';
import ScrollAnimation from 'react-animate-on-scroll';
import { Row } from './HowToPlayPage';
import MockupPhone from '../components/mockupComponents/MockupPhone';
import SideBySideNorm from '../components/SideBySideNorm';
import Logo from '../components/Logo';

const LeaguesPage = () => {

    return (
        <div className="leagues-page">
            <Splash
            header={
            <div className="splash__left__header">
                Made for <span style={{color: LightMode.teal}}>Investors</span> by <span style={{color: LightMode.darkBlue}}>Investors</span>
            </div>}
            text="At Lukrio, we belive that everyone regardless of background can be an investor through hands-on, enjoyable learning experiences."
            right={<Cycling style={{width: '30vw', height: 'auto', objectFit: 'contain'}}/>}
            leftWidth="40vw"
            marginRight="3vw"
            />
            <SideBySideNorm
            header={
                <>
                Why <Logo style={{width: 'auto', height: '2.6vw', objectFit: 'contain', marginLeft: '0.8vw', marginRight: '0.4vw'}}/>? Our Mission
                </>
            }
            rows={
                <>
                <Row emoji="🕹️" text="Even the investing playing field and help people learn investing in a fun and effective way." delay={200}/>
                <Row emoji="💎" text="Create a new asset class minimally correlated with market. Make money beating real people not the market." delay={0}/>
                <Row emoji="🍪" text="Make investing social. Meet new friends, learn from successful mentors and represent your university or club." delay={0}/>
                </>
            }
            right={
                <Cycling style={{width: '30vw', height: 'auto', objectFit: 'contain'}}/>
            }
            />
            <Leagues />
        </div>
    )
}

export default LeaguesPage;