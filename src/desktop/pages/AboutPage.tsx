import React from 'react';
import Splash from '../components/Splash';
import './AboutPage.styles.css';
import '../../App.css';
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
                <h1 className="about__timeline__header">Our Journey & Next Steps</h1>
                <VerticalTimeline>
                    <VerticalTimelineElement
                    className="timeline__element"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="January 2021"
                    dateClassName="about__timeline__date"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<div />}
                    >
                        <h3 className="vertical-timeline-element-title">Retail Investor Revolution</h3>
                        <div style={{fontStyle: 'italic'}}>
                            COVID, GME, AMC & more - retail investors become increasingly relevant in the markets
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="timeline__element"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="February 2021"
                    dateClassName="about__timeline__date"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<div />}
                    >
                        <h3 className="vertical-timeline-element-title">Start of App Development</h3>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="timeline__element"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="May 2021"
                    dateClassName="about__timeline__date"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<div />}
                    >
                        <h3 className="vertical-timeline-element-title">Alpha Test</h3>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="timeline__element"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="September 2021"
                    dateClassName="about__timeline__date__live"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<div />}
                    >
                        <h3 className="vertical-timeline-element-title link about__timeline__title">App Store Launch</h3>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="timeline__element"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="October 2021"
                    dateClassName="about__timeline__date__live"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<div />}
                    >
                        <h3 className="vertical-timeline-element-title link about__timeline__title">Lukrio Leagues</h3>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="timeline__element"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="November 2021"
                    dateClassName="about__timeline__date__live"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<div />}
                    >
                        <h3 className="vertical-timeline-element-title link about__timeline__title">Google Play Store Launch</h3>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="timeline__element"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="October 2021"
                    dateClassName="about__timeline__date__live"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<div />}
                    >
                        <h3 className="vertical-timeline-element-title link about__timeline__title">Lukrio Education</h3>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="timeline__element"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="October 2021"
                    dateClassName="about__timeline__date__live"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<div />}
                    >
                        <h3 className="vertical-timeline-element-title link about__timeline__title">Lukrio Social</h3>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
            <div className="about__features">

            </div>
        </div>
    )
}

export default AboutPage;