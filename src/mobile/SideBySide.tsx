import React from 'react';
import './SideBySide.css';

const SideBySide = ({header, text, image} : {header: string, text: string, image: string}) => {
    return (
    <div className="SideBySide--container">
        <div className="SideBySide--wrapper">
        <div className="SideBySide--text">
            <div className="SideBySide--text__header">{header}</div>
            <div className="SideBySide--text__main">{text}</div>
        </div>
        <div className="SideBySide--spacer"></div>
        <img className="SideBySide--image__container" src={image}/>
        </div>
    </div>
    )
}

export default SideBySide;