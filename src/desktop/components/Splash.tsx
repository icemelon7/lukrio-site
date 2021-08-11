import React, { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import './Splash.styles.css';

type SplashProps = {
    header: string;
    text: string;
    subheader?: string;
    right: ReactElement;
}

const Splash: FunctionComponent<SplashProps> = ({header, subheader, text, right}) => {

    return (
        <div className="splash">
            <div className="splash__left">
                <div className="splash__left__header">{header}</div>
                {
                    subheader ?
                    <div className="splash__left__subheader">{subheader}</div>
                    :
                    <div/>
                }
                <div className="splash__left__text">{text}</div>
            </div>
            <div className="splash__right">
                {right}
            </div>
        </div>
    )
}

export default Splash;