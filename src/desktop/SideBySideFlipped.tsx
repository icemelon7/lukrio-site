import React from 'react';
import './SideBySide.css';

const SideBySideFlipped = ({header, text, image} : {header: string, text: string, image: string}) => {
    return (
    <div className="Desktop--SideBySide--container">
        <div className="Desktop--SideBySide--wrapper">
            <img className="Desktop--SideBySide--image__container--flipped" src={image}/>
            <div className="Desktop--SideBySide--spacer__flipped"></div>
            <div className="Desktop--SideBySide--text">
                <div className="Desktop--SideBySide--text__header">{header}</div>
                <div className="Desktop--SideBySide--text__main">{text}</div>
            </div>
        </div>
    </div>
    )
}

export default SideBySideFlipped;