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
    height?: number | string;
}

const Splash: FunctionComponent<SplashProps> = ({header, subheader, text, right, leftWidth, marginRight, paddingTop, disclaimer, height}) => {

    return (
        <div className="splash" style={{paddingTop: paddingTop ?? window.innerWidth < 1024 ? '10vh' : '15vh', height: height ?? 'auto'}}>
            <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce style={{width: leftWidth ?? window.innerWidth < 1024 ? '40vw' : '30vw', marginRight: marginRight ?? window.innerWidth < 1024 ? '3vw' : '10vw'}} className="splash__left">
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
                <ScrollAnimation animateIn="animate__fadeInUp" animateOnce delay={800} className="splash__left__text">{text}</ScrollAnimation>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeInRight" animateOnce className="splash__right">
                {right}
            </ScrollAnimation>
        </div>
    )
}

export default Splash;