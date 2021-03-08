import React from 'react';
import Podium from "./assets/podium.png";
import './SideBySide.css';

class SideBySide extends React.Component {
    render() {
        return (<div className="SideBySide--container">
            <div className="SideBySide--wrapper">
            <div className="SideBySide--text">
                <div className="SideBySide--text__header">The new place to trade</div>
                <div className="SideBySide--text__main">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div className="SideBySide--spacer"></div>
            <img className="SideBySide--image__container" src={Podium}/>
            </div>
        </div>
        )
    }

}

export default SideBySide;