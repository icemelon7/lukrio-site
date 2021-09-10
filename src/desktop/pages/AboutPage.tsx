import React from 'react';
import 'react-vertical-timeline-component/style.min.css';
import '../../App.css';
import { ReactComponent as Cycling } from '../../assets/figmaIcons/cycling.svg';
import { LightMode } from '../../Colors';
import MockupPhone from '../components/mockupComponents/MockupPhone';
import Splash from '../components/Splash';
import AboutTimeline from '../views/AboutTimeline';
import Founders from '../views/Founders';
import './AboutPage.styles.css';
import HomeMockup from '../../assets/LiquidSwipe.MP4';
import ScrollAnimation from 'react-animate-on-scroll';
import Logo from '../components/Logo';
import { Row } from './HowToPlayPage';
import FeatureIconDisplay from '../views/FeatureIcon';

const AboutPage = () => {

    return (
        <div className="about">
            <Splash 
            header={
            <div className="splash__left__header">
                Made for <span style={{color: LightMode.teal}}>Investors</span> by <span style={{color: LightMode.darkBlue}}>Investors</span>
            </div>}
            text="At Lukrio, we belive that everyone regardless of background can be an investor through hands-on, enjoyable learning experiences."
            right={<Cycling style={window.innerWidth < 1024 ? {width: '50vw', height: 'auto', objectFit: 'contain'} : {width: '30vw', height: 'auto', objectFit: 'contain'}}/>}
            leftWidth="35vw"
            marginRight="3vw"
            />
            {
                window.innerWidth < 1024 ?
                <div className="about__idea">
                    <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce delay={100} className="about__idea__content__header">Why <Logo style={{width: 'auto', height: '1.3em', objectFit: 'contain', marginLeft: '0.8vw', marginRight: '0.4vw'}}/>? Our Mission</ScrollAnimation>
                    <div className="about__idea__content">    
                        <div className="about__idea__content__inner">
                            <Row emoji="🕹️" text="Even the investing playing field and help people learn investing in a fun and effective way." delay={200}/>
                            <Row emoji="💎" text="Create a new asset class minimally correlated with market. Make money beating real people not the market." delay={0}/>
                            <Row emoji="🍪" text="Make investing social. Meet new friends, learn from successful mentors and represent your university or club." delay={0}/>
                        </div>
                    </div>
                    <MockupPhone 
                    content={
                        <video className="about__idea__video" autoPlay muted playsInline loop style={{width: '100%', height: '100%'}}>
                            <source src={HomeMockup} type="video/mp4" />
                        </video>
                    }
                    isRotate
                    delay={500}
                    style={{zoom: '0.4 !important'}}
                    />
                </div>
                :
                <div className="about__idea">
                <div className="about__idea__content">
                    <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce delay={100} className="about__idea__content__header">Why <Logo style={{width: 'auto', height: '2.6vw', objectFit: 'contain', marginLeft: '0.8vw', marginRight: '0.4vw'}}/>? Our Mission</ScrollAnimation>
                    <div className="about__idea__content__inner">
                        <Row emoji="🕹️" text="Even the investing playing field and help people learn investing in a fun and effective way." delay={200}/>
                        <Row emoji="💎" text="Create a new asset class minimally correlated with market. Make money beating real people not the market." delay={0}/>
                        <Row emoji="🍪" text="Make investing social. Meet new friends, learn from successful mentors and represent your university or club." delay={0}/>
                    </div>
                </div>
                <MockupPhone 
                content={
                    <video className="about__idea__video" autoPlay playsInline muted loop style={{width: '100%', height: '100%'}}>
                        <source src={HomeMockup} type="video/mp4" />
                    </video>
                }
                isRotate
                delay={500}
                />
                </div>
            }
            
            <FeatureIconDisplay hideLink />
            <Founders />
        </div>
    )
}

export default AboutPage;