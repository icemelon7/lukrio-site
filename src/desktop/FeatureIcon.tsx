import React from 'react';
import "./FeatureIcon.css";
import ToTheMoon from "../assets/featureIcons/tothemoon.png";
import Usability from "../assets/featureIcons/usability.png";
import Education from "../assets/featureIcons/education.png";
import Conversation from "../assets/featureIcons/conversation.png";

const FeatureIconBlock = ({icon, header, subtitle} : {icon: string, header: string, subtitle: string}) => {
    return (
        <div className="FeatureIconBlock--wrapper">
            <img className="FeatureIconBlock--icon" src={icon}></img>
            <br/>
            <span className="FeatureIconBlock--text__header">{header}</span>
            <br/>
            <br/>
            <span className="FeatureIconBlock--text__subtitle">{subtitle}</span>
        </div>
    );
}

// display s
const FeatureIconDisplay = ({}) => {
    return (
    // this.props.header
    // this.props.subtitle
    // this.props.icon
    <div className="FeatureIconDisplay--wrapper">
        <FeatureIconBlock
            icon={Usability} 
            header="Smart and Intuitive"
            subtitle="Lukrio's newsfeed provides you with the day's top stock pitches and user posts aligned with your interests"
        />
        <FeatureIconBlock
            icon={Education}
            header="Portfolio Feedback"
            subtitle="Our cutting-edge technology analyzes your portfolio to generate tips and advice, helping you become a better investor"
        /> 
        <FeatureIconBlock
            icon={Conversation}
            header="Powerful Chat"
            subtitle="Discuss stocks, draw charts, import real-time market data, create memes in two clicks, and so much more "
        />
        <FeatureIconBlock
            icon={ToTheMoon}
            header="Shoot for the Moon"
            subtitle="Compete with others in paper trading and launch your investment portfolio into outer space"
        />
    </div>);
}

export default FeatureIconDisplay;
