import React from 'react';
import './SideBySide.css';

const SideBySide = ({header, text, image} : {header: string, text: string, image: string}) => {
    return (
    <div className="Desktop--SideBySide--container">
        <div className="Desktop--SideBySide--wrapper">
        <div className="Desktop--SideBySide--text">
            <div className="Desktop--SideBySide--text__header">{header}</div>
            <div className="Desktop--SideBySide--text__main">{text}</div>
        </div>
        <div className="Desktop--SideBySide--spacer"></div>
        <img className="Desktop--SideBySide--image__container" src={image}/>
        </div>
    </div>
    )
}

export default SideBySide;