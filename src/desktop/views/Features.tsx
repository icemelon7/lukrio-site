import React, { FunctionComponent, useState } from 'react';
import './Features.styles.css';
import {ReactComponent as BarChart} from '../../assets/ionicons/bar-chart.svg';
import {ReactComponent as School} from '../../assets/ionicons/school.svg';
import {ReactComponent as ShareSocial} from '../../assets/ionicons/share-social.svg';
import { LightMode } from '../../Colors';
import Logo from '../components/Logo';
import { Row } from '../pages/HowToPlayPage';
import {ReactComponent as Leagues} from '../../assets/figmaIcons/BankShake.svg';
import {ReactComponent as Education} from '../../assets/figmaIcons/Budgeting.svg';
import {ReactComponent as Social} from '../../assets/figmaIcons/CoinWall.svg';
import Redirect from '../components/Redirect';
import ScrollAnimation from 'react-animate-on-scroll';

type FeaturesProps = {
    moreLink?: boolean;
}

const Features : FunctionComponent<FeaturesProps> = ({moreLink}) => {

    const [active, setActive] = useState<number>(1);

    return (
        <div className="features-outer">
            {
                moreLink ?
                <ScrollAnimation animateIn="animate__fadeIn" animateOnce delay={1000}><Redirect text="Learn more about our vision" url="vision" /></ScrollAnimation>
                :
                <div />
            }
            <div className="features">
            <ScrollAnimation animateIn="animate__fadeInUp" animateOnce delay={500} className="features__header">
                Upcoming <Logo style={{width: 'auto', height: '3vw', objectFit: 'contain', marginLeft: '0.5vw', marginRight: '0.5vw'}}/> Features
                
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeInUp" animateOnce delay={750} className="features__selector">
                <Feature 
                index={1}
                active={active}
                setActive={setActive}
                icon={<BarChart fill={active === 1 ? LightMode.teal : 'black'} style={{width: '3vw', height: '3vw', objectFit: 'contain'}}/>}
                header="Leagues"
                text="Represent your university or club"
                />
                <Feature 
                index={2}
                active={active}
                setActive={setActive}
                icon={<School fill={active === 2 ? LightMode.teal : 'black'} style={{width: '3vw', height: '3vw', objectFit: 'contain', color: 'red'}}/>}
                header="Education"
                text="Customized Portfolio Feedback"
                />
                <Feature 
                index={3}
                active={active}
                setActive={setActive}
                icon={<ShareSocial fill={active === 3 ? LightMode.teal : 'black'} style={{width: '3vw', height: '3vw', objectFit: 'contain'}} />}
                header="Social"
                text="Integrated Stock Pitch Feed"
                />
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeInUp" animateOnce className="features__content">
                {
                    active === 1 ?
                    <FeatureDetail
                    content={
                        <>
                            <Row emoji="🗂️" text="Compare the aggregate performance of all users from your university or investing club against others." delay={200}/>
                            <Row emoji="🔍" text="View your rank within all users from your university or investing club. Put your money where your mouth is." delay={300}/>
                            <Row emoji="🚀" text="Increase your recruiting chances with investing clubs and hedge funds by developing a demonstrated track record." delay={400}/>
                        </>
                    }
                    right={<Leagues style={{width: '25vw', height: 'auto', objectFit: 'contain'}}/>}
                    redirect={<Redirect bottomLeft text="Lean more about Lukrio Leagues" url="/leagues"/>}
                    />
                    :
                    active === 2 ? 
                    <FeatureDetail
                    content={
                        <>
                            <Row emoji="🎓" text="Understand your investing style based on a custom profile created just for you using your trades in game as calibration." delay={200}/>
                            <Row emoji="🩹" text="Improve on investing weaknesses thanks to reminders during your next game. Become a better investor one step at a time." delay={300}/>
                            <Row emoji="🔮" text="Visualize the impact of your decisions through simulations showcasing different portfolio values as a result of key trades." delay={400}/>
                        </>
                    }
                    right={<Education style={{width: '30vw', height: 'auto', objectFit: 'contain'}}/>}
                    redirect={<Redirect bottomLeft noLink text="Learn more about Lukrio Education (Coming Soon)" url="" textColor={LightMode.darkGrey}/>}
                    />
                    :
                    <FeatureDetail
                    content={
                        <>
                            <Row emoji="📋" text="Pitch your ideas using Lukrio's in-app slides maker to create engaging and easy to understand pitches." delay={200}/>
                            <Row emoji="🎁" text="Collaborate on stock ideas, the way it was meant to be. Share analysis with ease via chat integrated finance tools." delay={300}/>
                            <Row emoji="🎉" text="Keep it fun with our easy to use finmeme maker. Find your favourite templates within seconds and edit as you please." delay={400}/>
                        </>
                    }
                    right={<Social style={{width: '30vw', height: 'auto', objectFit: 'contain'}}/>}
                    redirect={<Redirect bottomLeft noLink text="Learn more about Lukrio Social (Coming Soon)" url="" textColor={LightMode.darkGrey}/>}
                    />
                }
            </ScrollAnimation>
        </div>        
        </div>
    )
}

type FeatureDetailProps = {
    content: JSX.Element;
    right: JSX.Element;
    redirect?: JSX.Element;
}

const FeatureDetail : FunctionComponent<FeatureDetailProps> = ({content, right, redirect}) => {
    return (
        <div className="feature-detail">
            {redirect}
            <div className="feature-detail__content">
                {content}
            </div>
            <ScrollAnimation animateIn="animate__fadeInUp" animateOnce delay={250} className="feature-detail__right">
                {right}
            </ScrollAnimation>
        </div>
    )
}

type FeatureProps = {
    index: number;
    active: number;
    setActive: (value: number) => void;
    icon?: string | JSX.Element;
    emoji?: string;
    header: string;
    text: string;
}

const Feature : FunctionComponent<FeatureProps> = ({index, active, setActive, header, text, icon, emoji}) => {

    return (
        <div onClick={() => setActive(index)} className={`feature ${index === active ? 'selected' : ''}`}>
            {
                icon ? 
                typeof icon === 'string'
                ?
                <img src={icon} alt={icon} style={{}} />
                :
                icon
                :
                <div className="feature__emoji">{emoji}</div>
            }
            <div className="feature__content">
                <div className="feature__content__header">{header}</div>
                {text}
            </div>
        </div>
    )
}

export default Features;