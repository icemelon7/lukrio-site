import React, { FunctionComponent } from 'react';
import Splash from '../components/Splash';
import Rocket from '../../assets/rocket.png';
import './VisionPage.styles.css';
import VisionRow from '../views/components/VisionRow';
import FeatureIconDisplay from '../views/FeatureIcon';
import {ReactComponent as BankShake} from '../../assets/figmaIcons/BankShake.svg';
import {ReactComponent as TeamWork} from '../../assets/figmaIcons/TeamWork.svg';
import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll';
import Features from '../views/Features';
import AboutTimeline from '../views/AboutTimeline';

const VisionPage = () => {

    return (
        <div className="vision">
            <Splash
            header="Join a new Generation of "
            subheader="Investors"
            text="A new online investing community platform, aimed at bringing together retail investors new and old, regardless of experience."
            right={<img className="vision__img" src={Rocket} alt="Vision Rocket Emoji" />}
            leftWidth='45vw'
            marginRight='0vw'
            height={window.innerWidth < 1024 ? '35vh' : "80vh"}
            />
            <Features />
            <AboutTimeline />
            <div className="vision__block">
                <ScrollAnimation animateIn="animate__fadeInUp" animateOnce>
                <VisionRow 
                left={<BankShake style={{width: '100%', height: '100%', objectFit: 'contain'}}/>}
                topHeader="Competitions: Learn, Play & Earn"
                topText="Compete against friends or challenge investors around the world - all while earning money and honing your investment skills. Play to beat each other, not the market."
                bottomHeader="Community: Share, Discuss & Learn"
                bottomText="Discuss stocks, draw charts, see what friends are investing in, follow your favourite investors, discover new stock ideas, create memes in two clicks and more."
                />
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeInUp" animateOnce>
                <VisionRow
                left={<TeamWork style={{width: '100%', height: '100%', objectFit: 'contain'}}/>}
                topHeader="Investing for everyone"
                topText="Whether new investor, restricted investment banker or from a myriad of other backgrounds, we want Lukrio to be for everyone and help even the investing playing field."
                bottomHeader="Educational & Entertaining"
                bottomText="Paper trading isn't super fun but lets you learn investing best... by actually investing. Lukrio adds cash prizes and tailored feedback based on your trades."
                />
                </ScrollAnimation>
            </div>
        </div>
    )
}

export default VisionPage;