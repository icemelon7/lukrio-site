import React from 'react';
import Splash from '../components/Splash';
import {ReactComponent as CompetitiveSplash} from '../../assets/splashIcons/competitively.svg';
import { LightMode } from '../../Colors';
import ScrollAnimation from 'react-animate-on-scroll';
import Stores from '../components/Stores';

const ReferralPage = () => {

    return (
        <div className="referral">
            <Splash 
            header="Start Investing with Lukrio, "
            subheader="Competitively"
            text={
            <>
                <ScrollAnimation animateIn="animate__fadeInUp" animateOnce delay={500}><p style={{fontSize: '2.5vw', marginTop: '3vh'}}>Beat <span style={{color: LightMode.teal}}>Others</span>, not the <span style={{color: LightMode.darkBlue}}>Market.</span></p></ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeInUp" animateOnce delay={800}><p>Start now with a <span style={{color: LightMode.teal}}>$5 free starting balance*</span> and an <span style={{color: LightMode.darkBlue}}>additional free $5</span> for each friend you refer**.</p></ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeInUp" animateOnce delay={1100}><p>We will match your <span style={{color: LightMode.teal}}>first deposit up to $20!</span></p></ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeInUp" animateOnce delay={1400}><Stores style={{float: 'left', marginBottom: '2vh'}} /></ScrollAnimation>
            </>
            }
            marginRight="0vw"
            leftWidth="40vw"
            paddingTop="0vh"
            right={<CompetitiveSplash style={{width: '35vw', height: '70vh', zoom: 1, objectFit: 'cover'}}/>}
            disclaimer={
                <ScrollAnimation animateIn="animate__fadeInUp" animateOnce delay={500} className="disclaimer">
                *, ** Free starting balance and free referral bonuses requires verified email ending in .edu (e.g. joe@school.edu).
                </ScrollAnimation>
            }
            />
        </div>
    )
}

export default ReferralPage;