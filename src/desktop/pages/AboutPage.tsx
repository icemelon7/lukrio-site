import React from 'react';
import Splash from '../components/Splash';
import './AboutPage.styles.css';
import {ReactComponent as Cycling} from '../../assets/figmaIcons/cycling.svg';
import { LightMode } from '../../Colors';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const AboutPage = () => {

    return (
        <div className="about">
            <Splash 
            header={
            <div className="splash__left__header">
                Made for <span style={{color: LightMode.teal}}>Investors</span> by <span style={{color: LightMode.darkBlue}}>Investors</span>
            </div>}
            text="Learn more about why we are building Lukrio, who we are and what new features are coming soon"
            right={<Cycling style={{width: '30vw', height: 'auto', objectFit: 'contain'}}/>}
            leftWidth="35vw"
            marginRight="3vw"
            />
            <div className="about__idea">

            </div>
            <div className="about__timeline">
                <div className="about__timeline__header">Next Steps</div>
                <VerticalTimeline>
                    <VerticalTimelineElement
                    className="timeline__element"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2011 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<div />}
                    >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
            <div className="about__features">

            </div>
        </div>
    )
}

export default AboutPage;