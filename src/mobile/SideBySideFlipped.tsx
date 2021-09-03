import React from 'react';
import './SideBySideFlipped.css';

const SideBySideFlipped = ({header, text, image} : {header: string, text: string, image: string}) => {
    return (
    <div className="SideBySide--container--flipped">
        <div className="SideBySide--wrapper--flipped">
            <img className="SideBySide--image__container--flipped" src={image}/>
            <div className="SideBySide--spacer__flipped"></div>
            <div className="SideBySide--text--flipped">
                <div className="SideBySide--text__header--flipped">{header}</div>
                <div className="SideBySide--text__main--flipped">{text}</div>
            </div>
        </div>
        <div className="Spacer"></div>
    </div>
    )
}

export default SideBySideFlipped;