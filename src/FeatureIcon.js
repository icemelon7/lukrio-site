import React from 'react';
import "./FeatureIcon.css";
import ToTheMoon from "./assets/featureIcons/tothemoon.png";
import Usability from "./assets/featureIcons/usability.png";
import Education from "./assets/featureIcons/education.png";
import Conversation from "./assets/featureIcons/conversation.png";


class FeatureIconBlock extends React.Component {
    render() {
        // this.props.header
        // this.props.subtitle
        // this.props.icon_address

        // this.props.class
        return (
            <div className="FeatureIconBlock--wrapper">
                <img className="FeatureIconBlock--icon" src={this.props.icon}></img>
                <br/>
                <span className="FeatureIconBlock--text__header">{this.props.header}</span>
                <br/>
                <br/>
                <span className="FeatureIconBlock--text__subtitle">{this.props.subtitle}</span>
            </div>
        );
    }
}

// display s
class FeatureIconDisplay extends React.Component {

    render() {
        return (
        // this.props.header
        // this.props.subtitle
        // this.props.icon
        <div className="FeatureIconDisplay--wrapper">
            <FeatureIconBlock
                icon={Usability}
                header="Two-Part Platform"
            subtitle="Come for the competitions, stay for the education and social experience!"
            >
            </FeatureIconBlock>

            <FeatureIconBlock
             icon={Education}
            header="Portfolio Feedback"
            subtitle="Our cutting-edge technology analyzes your actions within the game to generate tips that help you become a better investor"
            >
            </FeatureIconBlock>

            <FeatureIconBlock
            icon={Conversation}
            header="Engaging Community"
            subtitle="Discuss stocks, analyze charts, and learn from the top players in our community on our tailored social platform"
            >
            </FeatureIconBlock>

            <FeatureIconBlock
             icon={ToTheMoon}
             header="Shoot for the Moon"
             subtitle="Compete against friends, or challenge investors from around the world - all while earning real money"
             >
             </FeatureIconBlock>
        </div>);
    }
}

export default FeatureIconDisplay;
