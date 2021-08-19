import React, { FunctionComponent } from 'react';
import MockupPhone from './mockupComponents/MockupPhone';
import TripleMockup from './mockupComponents/TripleMockup';
import './SideBySideFixed.styles.css';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';

type SideBySideFixedProps = {
    header: string;
    imgPos: "left" | "right";
    firstMock: string;
    secondMock?: string;
    thirdMock?: string;
    content: JSX.Element;
}

const SideBySideFixed : FunctionComponent<SideBySideFixedProps> = ({header, imgPos, firstMock, secondMock, thirdMock, content, }) => {

    return (
        <ScrollAnimation animateIn="fadeInUp" >
        <div className="side-fixed">
            {
                imgPos === 'right'
                ?
                <>
                    <div className="side-fixed__content" style={{marginRight: '10vw'}}>
                        <div className="side-fixed__content__header">{header}</div>
                        {content}
                    </div>
                    {
                        typeof secondMock === 'string' && typeof thirdMock === 'string' ?
                        <TripleMockup firstMock={firstMock} secondMock={secondMock} thirdMock={thirdMock}/>
                        :
                        <MockupPhone content={<img src={firstMock} alt={firstMock} style={{width: '100%', height: '100%', borderRadius: '25px'}}/>}/>
                    }
                </>
                :
                <>
                    {
                        typeof secondMock === 'string' && typeof thirdMock === 'string' ?
                        <TripleMockup firstMock={firstMock} secondMock={secondMock} thirdMock={thirdMock}/>
                        :
                        <MockupPhone content={<img src={firstMock} alt={firstMock} style={{width: '100%', height: '100%', borderRadius: '25px'}}/>}/>
                    }
                    <div className="side-fixed__content" style={{marginLeft: '10vw'}}>
                        <div className="side-fixed__content__header">{header}</div>
                        {content}
                    </div>
                </>
            }
            </div>
        </ScrollAnimation>
    )
}

export default SideBySideFixed;