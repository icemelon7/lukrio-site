import React, { FunctionComponent } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Splash from '../components/Splash';
import './RestrictionsPage.styles.css';
import Gambling from '../../assets/playIcons/gambling.png';

const RestrictionsPage = () => {

    return (
        <div className="restrictions">
            <Splash
             paddingTop="0"
             leftWidth="40vw"
             marginRight="2vw"
             header={
                     <div style={{marginBottom: '3vh'}} className="splash__left__header"><span style={{color: 'var(--darkBlue)'}}>Restricted Play</span> with <span style={{color: 'var(--teal-color)'}}>Lukrio</span></div>
             }
             text="Unfortunately due to the cash-incentivzed and non-deterministic nature of Lukrio's gameplay, we have to enforce the following age, location and fraud restrictions detailed below."
             right={
                 <img src={Gambling} alt={"Gaming icon"} style={{zoom: 2}}/>
             }
            />
            <div className="restrictions__content">
                <div className="restrictions__column">
                    <Row emoji="🕹️" text="Location Restrictions" delay={300}/>
                    <ScrollAnimation animateIn="animate__fadeInUp" animateOnce delay={400}>
                        <p>Unfortunately, you cannot play if you are located outside of Germany or the United States.</p>
                        <p>Within the US, you cannot play if you are located in one of the following states:</p>
                        <div className="restrictions__location">
                        <ul>
                            <li>Arkansas</li>
                            <li>Arizona</li>
                            <li>Delaware</li>
                            <li>Florida</li>
                            <li>Louisiana</li>
                            <li>Maryland</li>
                        </ul>
                        <ul style={{marginLeft: '3vw'}}>
                            <li>Michigan</li>
                            <li>Montana</li>
                            <li>Nebraska</li>
                            <li>New Mexico</li>
                            <li>Tennessee</li>
                            <li>South Carolina</li>
                        </ul>
                        </div>    
                    </ScrollAnimation>
                        
                </div>
                <div className="restrictions__column">
                    <Row emoji="🕹️" text="Age Restrictions" delay={300}/>
                    <ScrollAnimation animateIn="animate__fadeInUp" animateOnce delay={500}>Users have to be 18 to play. To verify this, Lukrio asks you to confirm your date of birth during registration.</ScrollAnimation>
                    <Row emoji="🕹️" text="Fraud Restrictions" delay={0}/>
                    <ScrollAnimation animateIn="animate__fadeInUp" animateOnce delay={0}>
                        <p>We are committed to making Lukrio a fun and safe environment.</p>
                        <p>We proactively monitor for fraud, cheating, and collusion.</p>
                        <p>If you engage in these activities you will not be permitted to play any competitions.</p>
                        <p>For any questions regarding this restriction, please contact us at raymondm@lukrio.com.</p>
                    </ScrollAnimation>
                    
                </div>
            </div>
        </div>
    )
}

type RowProps = {
    emoji: string;
    text: string;
    delay: number;
}

const Row : FunctionComponent<RowProps>= ({emoji, text, delay}) => {
    return (
        <ScrollAnimation animateIn="animate__fadeInUp" animateOnce delay={delay} className="restrictions__row">
            <div className="restrictions__row__emoji">{emoji}</div>
            <h4 className="restrictions__row__text">{text}</h4>
        </ScrollAnimation>
    )
}

export default RestrictionsPage;