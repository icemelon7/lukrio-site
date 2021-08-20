import React from 'react';
import Splash from '../components/Splash';
import './ResponsibleGamingPage.styles.css';
import Gaming from '../../assets/playIcons/gaming.png';
import ScrollAnimation from 'react-animate-on-scroll';

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
                
            </div>
        </div>
    )
}

export default ResponsibleGamingPage;