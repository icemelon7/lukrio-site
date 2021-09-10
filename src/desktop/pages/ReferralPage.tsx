import React, { FunctionComponent } from 'react';
import Splash from '../components/Splash';
import {ReactComponent as CompetitiveSplash} from '../../assets/splashIcons/competitively.svg';
import { LightMode } from '../../Colors';
import ScrollAnimation from 'react-animate-on-scroll';
import Stores from '../components/Stores';
import BetaSignup from '../components/BetaSignup';
import './ReferralPage.styles.css';

type ReferralPageProps = {
    isBeta?: boolean;
}

const ReferralPage : FunctionComponent<ReferralPageProps> = ({isBeta}) => {

    return (
        <div className="referral">
            {
                window.innerWidth < 1024 ?
                <div className="referral__splash">
                    <ScrollAnimation offset={0} animateIn="animate__fadeInUp" animateOnce delay={1600} className="referral__disclaimer">
                    *, ** Free starting balance and free referral bonuses requires verified email ending in .edu (e.g. joe@school.edu).
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__fadeInUp" animateOnce className="referral__splash__left__header">Start Investing with Lukrio,
                        <span className="referral__splash__left__subheader"> Competitively</span>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__fadeInUp" animateOnce delay={800} className="referral__splash__left__text">
                        <ScrollAnimation animateIn="animate__fadeInUp" animateOnce delay={500}><p style={{fontSize: '1.5rem', marginTop: '3vh'}}>Beat <span style={{color: LightMode.teal}}>Others</span>, not the <span style={{color: LightMode.darkBlue}}>Market.</span></p></ScrollAnimation>
                        <ScrollAnimation animateIn="animate__fadeInUp" animateOnce delay={800}><p>Start now with a <span style={{color: LightMode.teal}}>$5 free starting balance*</span> and an <span style={{color: LightMode.darkBlue}}>additional free $5</span> for each friend you refer**.</p></ScrollAnimation>
                        <ScrollAnimation animateIn="animate__fadeInUp" animateOnce delay={1100}><p>We will match your <span style={{color: LightMode.teal}}>first deposit up to $20!</span></p></ScrollAnimation>
                        <ScrollAnimation animateIn="animate__fadeInUp" animateOnce delay={1400}>
                            {isBeta ? 
                            <BetaSignup />
                            :
                            <Stores style={{float: 'left', marginBottom: '2vh'}} />
                            }
                        </ScrollAnimation>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__fadeInUp" animateOnce delay={300} className="referral__splash__right">
                        <CompetitiveSplash style={{width: '35vw', height: 'auto', marginTop: '3vh', zoom: 1, objectFit: 'cover'}}/>
                    </ScrollAnimation>
                </div>
                :
                <Splash 
                header="Start Investing with Lukrio, "
                subheader="Competitively"
                text={
                <>
                    <ScrollAnimation animateIn="animate__fadeInUp" animateOnce delay={500}><p style={{fontSize: '2.5vw', marginTop: '3vh'}}>Beat <span style={{color: LightMode.teal}}>Others</span>, not the <span style={{color: LightMode.darkBlue}}>Market.</span></p></ScrollAnimation>
                    <ScrollAnimation animateIn="animate__fadeInUp" animateOnce delay={800}><p>Start now with a <span style={{color: LightMode.teal}}>$5 free starting balance*</span> and an <span style={{color: LightMode.darkBlue}}>additional free $5</span> for each friend you refer**.</p></ScrollAnimation>
                    <ScrollAnimation animateIn="animate__fadeInUp" animateOnce delay={1100}><p>We will match your <span style={{color: LightMode.teal}}>first deposit up to $20!</span></p></ScrollAnimation>
                    <ScrollAnimation animateIn="animate__fadeInUp" animateOnce delay={1400}>
                        {isBeta ? 
                        <BetaSignup />
                        :
                        <Stores style={{float: 'left', marginBottom: '2vh'}} />
                        }
                    </ScrollAnimation>
                </>
                }
                marginRight="0vw"
                leftWidth="40vw"
                paddingTop="0vh"
                right={<CompetitiveSplash style={{width: '35vw', height: '70vh', zoom: 1, objectFit: 'cover'}}/>}
                disclaimer={
                    <ScrollAnimation offset={0} animateIn="animate__fadeInUp" animateOnce delay={1600} className="disclaimer">
                    *, ** Free starting balance and free referral bonuses requires verified email ending in .edu (e.g. joe@school.edu).
                    </ScrollAnimation>
                }
                
                />
            }
            
        </div>
    )
}

export default ReferralPage;