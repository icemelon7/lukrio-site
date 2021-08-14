import React, { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import './Splash.styles.css';

type SplashProps = {
    header: string;
    text: string | JSX.Element;
    subheader?: string;
    right: ReactElement;
    leftWidth?: string;
    marginRight?: string;
    disclaimer?: JSX.Element;
}

const Splash: FunctionComponent<SplashProps> = ({header, subheader, text, right, leftWidth, marginRight, disclaimer}) => {

    return (
        <div className="splash">
            <div style={{width: leftWidth ?? 'auto', marginRight: marginRight ?? '10vw'}} className="splash__left">
                {disclaimer ?? <div/>}
                <div className="splash__left__header">{header}{
                    subheader ?
                    <span className="splash__left__subheader">{subheader}</span>
                    :
                    <div/>
                }</div>
                
                <div className="splash__left__text">{text}</div>
            </div>
            <div className="splash__right">
                {right}
            </div>
        </div>
    )
}

export default Splash;