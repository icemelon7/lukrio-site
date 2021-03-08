import React from 'react';
import './SideBySide.css';

class SideBySide extends React.Component {
    render() {
        return (<div className="SideBySide--container">
            <div className="SideBySide--wrapper">
            <div className="SideBySide--text">
                <div className="SideBySide--text__header">{this.props.header}</div>
                <div className="SideBySide--text__main">{this.props.text}</div>
            </div>
            <div className="SideBySide--spacer"></div>
            <img className="SideBySide--image__container" src={this.props.image}/>
            </div>
        </div>
        )
    }

}

export default SideBySide;