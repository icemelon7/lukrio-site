import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import {ReactComponent as Refresh} from '../../assets/ionicons/refresh.svg';
import {ReactComponent as Golf} from '../../assets/ionicons/golf.svg';
import {ReactComponent as Apple} from '../../assets/ionicons/logo-apple-appstore.svg';
import {ReactComponent as Google} from '../../assets/ionicons/logo-google-playstore.svg';
import {ReactComponent as Social} from '../../assets/ionicons/share-social.svg';
import {ReactComponent as Rocket} from '../../assets/ionicons/rocket.svg';
import {ReactComponent as School} from '../../assets/ionicons/school.svg';
import {ReactComponent as BarChart} from '../../assets/ionicons/bar-chart.svg';
import './AboutTimeline.styles.css';

const AboutTimeline = () => {

    return (
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
            icon={<Refresh />}
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
            icon={<Golf />}
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
            icon={<Rocket />}
            >
                <h3 className="vertical-timeline-element-title">Alpha Test</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="timeline__element"
            contentStyle={{ background: 'var(--teal-color)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid var(--teal-color' }}
            date="September 2021"
            dateClassName="about__timeline__date__live"
            iconStyle={{ background: 'var(--teal-color)', color: '#fff' }}
            icon={<Apple />}
            >
                <h3 onClick={() => window.location.href = 'https://appstore.com'} className="vertical-timeline-element-title altLink about__timeline__title">App Store Launch</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="timeline__element"
            contentStyle={{ background: 'var(--teal-color)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  var(--teal-color)' }}
            date="October 2021"
            dateClassName="about__timeline__date__live"
            iconStyle={{ background: 'var(--teal-color)', color: '#fff' }}
            icon={<BarChart />}
            >
                <h3 onClick={() => window.location.href = "/about/leagues"} className="vertical-timeline-element-title altLink about__timeline__title">Lukrio Leagues</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="timeline__element"
            contentStyle={{ background: 'var(--teal-color)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  var(--teal-color)' }}
            date="November 2021"
            dateClassName="about__timeline__date__live"
            iconStyle={{ background: 'var(--teal-color)', color: '#fff' }}
            icon={<Google />}
            >
                <h3 className="vertical-timeline-element-title">Google Play Store Launch</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="timeline__element"
            contentStyle={{ background: 'var(--teal-color)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  var(--teal-color)' }}
            date="December 2021"
            dateClassName="about__timeline__date__live"
            iconStyle={{ background: 'var(--teal-color)', color: '#fff' }}
            icon={<School />}
            >
                <h3 onClick={() => window.location.href="/about/vision"} className="vertical-timeline-element-title altLink about__timeline__title">Lukrio Education</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="timeline__element"
            contentStyle={{ background: 'var(--teal-color)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  var(--teal-color)' }}
            date="January 2022"
            dateClassName="about__timeline__date__live"
            iconStyle={{ background: 'var(--teal-color)', color: '#fff' }}
            icon={<Social />}
            >
                <h3 onClick={() => window.location.href = "/about/vision"}className="vertical-timeline-element-title altLink about__timeline__title">Lukrio Social</h3>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
    )
}

export default AboutTimeline;