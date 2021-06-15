import React from 'react';
import './SideBySide.css';

const SideBySideFlipped = ({header, text, image} : {header: string, text: string, image: string}) => {
    return (
    <div className="SideBySide--container">
        <div className="SideBySide--wrapper">
            <img className="SideBySide--image__container--flipped" src={image}/>
            <div className="SideBySide--spacer__flipped"></div>
            <div className="SideBySide--text">
                <div className="SideBySide--text__header">{header}</div>
                <div className="SideBySide--text__main">{text}</div>
            </div>
        </div>
    </div>
    )
}

export default SideBySideFlipped;