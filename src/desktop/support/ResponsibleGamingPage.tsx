import React from 'react';
import Splash from '../components/Splash';
import './ResponsibleGamingPage.styles.css';
import Gaming from '../../assets/playIcons/gaming.png';
import Gambling from '../../assets/playIcons/gambling.png';
import ScrollAnimation from 'react-animate-on-scroll';
import SideBySideFixed from '../components/SideBySideFixed';
import { Row } from '../pages/HowToPlayPage';

const ResponsibleGamingPage = () => {

    return (
        <div className="gaming">
            <Splash
            paddingTop="0"
            leftWidth="40vw"
            marginRight="2vw"
            header={
                    <div style={{marginBottom: '3vh'}} className="splash__left__header"><span style={{color: 'var(--darkBlue)'}}>Game</span> with Lukrio, <span style={{color: 'var(--teal-color)'}}>Responsibly</span></div>
            }
            text="We are here to help you learn and grow as an investor. Hence, we provide features* in app to help you self-control and restrict how much you can deposit, how frequently you can play, etc."
            right={
                <img src={Gaming} alt={"Gaming icon"} style={{zoom: 2}}/>
            }
            disclaimer={
                <ScrollAnimation animateIn="animate__fadeInUp" animateOnce delay={1400} className="disclaimer">
                * Features are coming soon
                </ScrollAnimation>
            }
            />
            <div className="gaming__content">
                We are excited to have you practice investing with us. It will be a lot of fun and you will learn and improve too. Nontheless, we are fully committed to ensuring that each user is playing safely and responsibly. To help you practice investing responsibly, we are adding these features:
                <div className="gaming__content__inner">
                    <img src={Gambling} alt="Icon" className="gaming__content__inner__image"/>
                    <div className="gaming__content__inner__rows">
                        <Row emoji="🕹️" text="Set daily, weekly and monthly deposit and competition limits" delay={100}/>
                        <Row emoji="🕹️" text="Set timeout to lock the Lukrio app and prevent further gameplay" delay={200}/>
                        <Row emoji="🕹️" text="Access additional resources provided by Lukrio's support team" delay={300}/>
                    </div>
                </div>
                These features will be added in the coming months. In the meantime, if you have any questions or concerns please do not hesitate to contact us at raymondm@lukrio.com.
            </div>
        </div>
    )
}

export default ResponsibleGamingPage;