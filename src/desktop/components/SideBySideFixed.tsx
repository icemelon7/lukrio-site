import React, { FunctionComponent } from 'react';
import MockupPhone from './mockupComponents/MockupPhone';
import TripleMockup from './mockupComponents/TripleMockup';
import './SideBySideFixed.styles.css';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';

type SideBySideFixedProps = {
    index: number;
    header: string | JSX.Element;
    imgPos: "left" | "right";
    firstMock: string;
    firstMockIcon?: string;
    secondMock?: string;
    secondMockIcon?: string;
    thirdMock?: string;
    thirdMockIcon?: string;
    content: JSX.Element;
}

const SideBySideFixed : FunctionComponent<SideBySideFixedProps> = ({index, header, imgPos, firstMock, firstMockIcon, secondMock, secondMockIcon, thirdMock, thirdMockIcon, content, }) => {

    return (
        <div className="side-fixed">
            {
                imgPos === 'right'
                ?
                <>
                    <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce>
                        <div className="side-fixed__content" style={{marginRight: '5vw'}}>
                            {
                                typeof header === 'string' ? 
                                <div className="side-fixed__content__header">{header}</div>
                                :
                                header
                            }
                            {content}
                        </div>
                    </ScrollAnimation>                    
                    <Image firstMock={firstMock} secondMock={secondMock} thirdMock={thirdMock} firstMockIcon={firstMockIcon} secondMockIcon={secondMockIcon} thirdMockIcon={thirdMockIcon} />
                </>
                :
                <>
                    <Image firstMock={firstMock} secondMock={secondMock} thirdMock={thirdMock} firstMockIcon={firstMockIcon} secondMockIcon={secondMockIcon} thirdMockIcon={thirdMockIcon} />
                    <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce>
                        <div className="side-fixed__content" style={{marginLeft: '5vw'}}>
                            {
                                typeof header === 'string' ? 
                                <div className="side-fixed__content__header">{header}</div>
                                :
                                header
                            }
                            {content}
                        </div>
                    </ScrollAnimation>
                </>
            }
            </div>
    )
}

type FixedImageProps = {
    firstMock: string;
    firstMockIcon?: string;
    secondMock?: string;
    secondMockIcon?: string;
    thirdMock?: string;
    thirdMockIcon?: string;
}

const Image : FunctionComponent<FixedImageProps> = ({firstMock, secondMock, thirdMock, firstMockIcon, secondMockIcon, thirdMockIcon}) => {

    return (
        <>
            {
                        typeof secondMock === 'string' && typeof thirdMock === 'string' ?
                        <TripleMockup firstMock={firstMock} firstMockIcon={firstMockIcon} secondMock={secondMock} secondMockIcon={secondMockIcon} thirdMock={thirdMock} thirdMockIcon={thirdMockIcon}/>
                        :
                        <MockupPhone content={<img src={firstMock} alt={firstMock} style={{width: '100%', height: '100%', borderRadius: '25px'}}/>}/>
            }
        </>
    )
}

export default SideBySideFixed;