import React, { FunctionComponent } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './SideBySideNorm.styles.css';

type SideBySideNormProps = {
    rows: JSX.Element;
    right: JSX.Element;
    header: JSX.Element;
}

const SideBySideNorm : FunctionComponent<SideBySideNormProps> = ({rows, right, header}) => {

    return (
        <div className="side-norm">
            <div className="side-norm__content">
                <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce delay={100} className="side-norm__content__header">{header}</ScrollAnimation>
                <div className="side-norm__content__inner">
                    {rows}
                </div>
            </div>
            <div className="side-norm__right">
                {right}
            </div>
        </div>
    )
}

export default SideBySideNorm;