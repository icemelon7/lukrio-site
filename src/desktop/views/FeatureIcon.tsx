import React, { FunctionComponent } from 'react';
import "./FeatureIcon.css";
import ToTheMoon from "../../assets/featureIcons/tothemoon.png";
import Usability from "../../assets/featureIcons/usability.png";
import Education from "../../assets/featureIcons/education.png";
import Conversation from "../../assets/featureIcons/conversation.png";
import Redirect from '../components/Redirect';
import { LightMode } from '../../Colors';
import "animate.css";
import ScrollAnimation from 'react-animate-on-scroll';

const FeatureIconBlock = ({icon, header, subtitle, delay} : {icon: string, header: string, subtitle: string, delay: number}) => {
    return (
        <ScrollAnimation animateIn="animate__fadeIn" animateOnce delay={delay}>
            <div className="Desktop--FeatureIconBlock--wrapper">
                <img className="Desktop--FeatureIconBlock--icon" src={icon}></img>
                <br/>
                <span className="Desktop--FeatureIconBlock--text__header">{header}</span>
                <br/>
                <br/>
                <span className="Desktop--FeatureIconBlock--text__subtitle">{subtitle}</span>
            </div>
        </ScrollAnimation>
        
    );
}

type FeatureIconDisplayProps = {
    hideLink?: boolean
}

// display s
const FeatureIconDisplay : FunctionComponent<FeatureIconDisplayProps> = ({hideLink}) => {
    return (
    <div className="Desktop--FeatureIconDisplay--wrapper">
        {
            !hideLink ? 
            <ScrollAnimation animateIn="animate__fadeIn" animateOnce delay={1000}><Redirect text="Learn more about about us" url="lukrio" textColor={LightMode.darkWhite}/></ScrollAnimation>
            :
            <div/>
        }
        <FeatureIconBlock
            icon={Usability} 
            header="Smart and Intuitive"
            subtitle="Lukrio's platform allows you to easily get started investing in a real live environment with market, limit and short sale orders."
            delay={0}
        />
        <FeatureIconBlock
            icon={ToTheMoon}
            header="Shoot for the Moon"
            subtitle="Launch your investment portfolio into outer space and make cash beating other investors, not the market"
            delay={250}
        />
        <FeatureIconBlock
            icon={Education}
            header="Learn by Investing"
            subtitle="Develop your investing skill through hands-on experience in a low-stakes but still cash-incentivized environment"
            delay={500}
        /> 
        <FeatureIconBlock
            icon={Conversation}
            header="Join a Community"
            subtitle="Discuss stocks, investments and trades with fellow investors. Meet mentors and buddies along your journey"
            delay={750}
        />
        
    </div>);
}

export default FeatureIconDisplay;
