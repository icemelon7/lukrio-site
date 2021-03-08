import React from 'react';
import './SideBySide.css';

class SideBySideFlipped extends React.Component {
    render() {
        return (<div className="SideBySide--container">
            <div className="SideBySide--wrapper">
                <img className="SideBySide--image__container--flipped" src={this.props.image}/>
                <div className="SideBySide--spacer"></div>
                <div className="SideBySide--text">
                    <div className="SideBySide--text__header">{this.props.header}</div>
                    <div className="SideBySide--text__main">{this.props.text}</div>
                </div>
            </div>
        </div>
        )
    }

}

export default SideBySideFlipped;