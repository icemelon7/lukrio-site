import React from 'react';
import "./FeatureIcon.css";
import ToTheMoon from "../../assets/featureIcons/tothemoon.png";
import Usability from "../../assets/featureIcons/usability.png";
import Education from "../../assets/featureIcons/education.png";
import Conversation from "../../assets/featureIcons/conversation.png";

const FeatureIconBlock = ({icon, header, subtitle} : {icon: string, header: string, subtitle: string}) => {
    return (
        <div className="Desktop--FeatureIconBlock--wrapper">
            <img className="Desktop--FeatureIconBlock--icon" src={icon}></img>
            <br/>
            <span className="Desktop--FeatureIconBlock--text__header">{header}</span>
            <br/>
            <br/>
            <span className="Desktop--FeatureIconBlock--text__subtitle">{subtitle}</span>
        </div>
    );
}

// display s
const FeatureIconDisplay = ({}) => {
    return (
    // this.props.header
    // this.props.subtitle
    // this.props.icon
    <div className="Desktop--FeatureIconDisplay--wrapper">
        <FeatureIconBlock
            icon={Usability} 
            header="Smart and Intuitive"
            subtitle="Lukrio's newsfeed provides you with the day's top stock pitches and user posts aligned with your interests"
        />
        <FeatureIconBlock
            icon={ToTheMoon}
            header="Shoot for the Moon"
            subtitle="Launch your investment portfolio into outer space and make cash beating other investors, not the market"
        />
        <FeatureIconBlock
            icon={Education}
            header="Learn by Investing"
            subtitle="Develop your investing skill through hands-on experience in a low-stakes but still cash-incentivized environment"
        /> 
        <FeatureIconBlock
            icon={Conversation}
            header="Join a Community"
            subtitle="Discuss stocks, investments and trades with fellow investors. Meet mentors and buddies along your journey"
        />
        
    </div>);
}

export default FeatureIconDisplay;
