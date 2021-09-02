import React from 'react';
import './SideBySide.css';

const SideBySide = ({detailsRef, header, text, image} : {detailsRef?: any, header: string, text: any, image: string}) => {
    return (
    <div ref={detailsRef} className="Desktop--SideBySide--container">
        <div className="Desktop--SideBySide--text">
            <div className="Desktop--SideBySide--text__header">{header}</div>
            <div className="Desktop--SideBySide--text__main">{text}</div>
        </div>
        <img className="Desktop--SideBySide--image__container" src={image}/>
    </div>
    )
}

export default SideBySide;