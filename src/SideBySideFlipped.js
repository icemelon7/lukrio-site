import React from 'react';
import './SideBySideFlipped.css';

class SideBySideFlipped extends React.Component {
    render() {
        return (<div className="SideBySide--container--flipped">
            <div className="SideBySide--wrapper--flipped">
                <img className="SideBySide--image__container--flipped" src={this.props.image}/>
                <div className="SideBySide--spacer__flipped"></div>
                <div className="SideBySide--text--flipped">
                    <div className="SideBySide--text__header--flipped">{this.props.header}</div>
                    <div className="SideBySide--text__main--flipped">{this.props.text}</div>
                </div>
            </div>
            <div className="Spacer"></div>

        </div>
        )
    }

}

export default SideBySideFlipped;