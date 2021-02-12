import React from 'react';
import "./FeatureIcon.css";
import ToTheMoon from "./assets/featureIcons/tothemoon.png";
import Usability from "./assets/featureIcons/usability.png";
import Integration from "./assets/featureIcons/integration.png";
import Conversation from "./assets/featureIcons/conversation.png";


class FeatureIconBlock extends React.Component {
    render() {
        // this.props.header
        // this.props.subtitle
        // this.props.icon_address

        // this.props.class
        return (
            <div className="FeatureIconBlock--wrapper">
            {/* </div> <div className={this.props.class}> */}
                <img className="FeatureIconBlock--icon" src={this.props.icon}></img>
                <br/>
                <span class="FeatureIconBlock--text__header">{this.props.header}</span>
                <br/>
                <br/>
                <span class="FeatureIconBlock--text__subtitle">{this.props.subtitle}</span>
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
                header="Smart and Intuitive"
                subtitle="TradingFloor’s newsfeed provides you with real-time market news and user posts aligned with your interests"
                class="test1" //DEMO
            >
            </FeatureIconBlock>

            <FeatureIconBlock
             icon={Integration}
            header="Easy Integration"
            subtitle="Link your account with nearly every brokerage and show off your gains to your community"
            class="test2" //DEMO
            > 
            </FeatureIconBlock>

            <FeatureIconBlock
            icon={Conversation}
            header="Powerful Chat"
            subtitle="Draw charts, import real-time market data, create memes in two clicks, and much more "
            class="test3" //DEMO
            >
            </FeatureIconBlock>

            <FeatureIconBlock
             icon={ToTheMoon}
             header="Shoot for the Moon"
             subtitle="Compete with others in paper trading and launch your investment portfolio into outer space"
             class="test4" //DEMO
             >
             </FeatureIconBlock>
        </div>);
    }
}

export default FeatureIconDisplay;
