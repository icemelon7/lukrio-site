import React, { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import './Splash.styles.css';
import ScrollAnimation from 'react-animate-on-scroll';

type SplashProps = {
    header: string | JSX.Element;
    text: string | JSX.Element;
    subheader?: string;
    right: ReactElement;
    leftWidth?: string;
    marginRight?: string;
    disclaimer?: JSX.Element;
    paddingTop?: string;
}

const Splash: FunctionComponent<SplashProps> = ({header, subheader, text, right, leftWidth, marginRight, paddingTop, disclaimer}) => {

    return (
        <div className="splash" style={{paddingTop: paddingTop ?? '15vh'}}>
            <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce style={{width: leftWidth ?? '30vw', marginRight: marginRight ?? '10vw'}} className="splash__left">
                {disclaimer ?? undefined}
                {
                    typeof header === 'string' ? 
                    <div className="splash__left__header">{header}{
                        subheader ?
                        <span className="splash__left__subheader">{subheader}</span>
                        :
                        <div/>
                    }
                    </div>
                    :
                    header
                }
                <div className="splash__left__text">{text}</div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeInRight" animateOnce className="splash__right">
                {right}
            </ScrollAnimation>
        </div>
    )
}

export default Splash;