import React from 'react';
import 'react-vertical-timeline-component/style.min.css';
import '../../App.css';
import { ReactComponent as Cycling } from '../../assets/figmaIcons/cycling.svg';
import { LightMode } from '../../Colors';
import Splash from '../components/Splash';
import AboutTimeline from '../views/AboutTimeline';
import Founders from '../views/Founders';
import './AboutPage.styles.css';

const AboutPage = () => {

    return (
        <div className="about">
            <Splash 
            header={
            <div className="splash__left__header">
                Made for <span style={{color: LightMode.teal}}>Investors</span> by <span style={{color: LightMode.darkBlue}}>Investors</span>
            </div>}
            text="At Lukrio, we belive that everyone regardless of background can be an investor through hands-on, enjoyable learning experiences."
            right={<Cycling style={{width: '30vw', height: 'auto', objectFit: 'contain'}}/>}
            leftWidth="35vw"
            marginRight="3vw"
            />
            <div className="about__idea">
                
            </div>
            <Founders />
            <AboutTimeline />
        </div>
    )
}

export default AboutPage;