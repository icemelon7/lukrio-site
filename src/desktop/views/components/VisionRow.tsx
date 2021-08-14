import React, { FunctionComponent } from 'react';
import './VisionRow.styles.css';

type VisionRowProps = {
    left: JSX.Element | string;
    topHeader: string;
    topText: string;
    bottomHeader: string;
    bottomText: string;
}

const VisionRow : FunctionComponent<VisionRowProps> = ({left, topHeader, topText, bottomHeader, bottomText}) => {

    return (
        <div className="vision-row">
            <div className="vision-row__left">
            {
                typeof left === "string" ? 
                <img src={left} alt={left} className="vision-row__img" />
                :
                <div className="vision-row__img">
                    {left}
                </div>
            }
            </div>
            <div className="vision-row__right">
                <div className="vision-row__block">
                    <div className="vision-row__header">{topHeader}</div>
                    <div className="vision-row__text">{topText}</div>
                </div>
                <div className="vision-row__block">
                    <div className="vision-row__header">{bottomHeader}</div>
                    <div className="vision-row__text">{bottomText}</div>
                </div>
            </div>
        </div>
    )
}

export default VisionRow;