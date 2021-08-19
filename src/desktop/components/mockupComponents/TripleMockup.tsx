import React, { FunctionComponent } from 'react';
import './TripleMockup.styles.css';
import '../../../devices.css';
import MockupPhone from './MockupPhone';
import 'animate.css/animate.min.css';

type TripleMockupProps = {
    firstMock: string;
    firstMockIcon?: string;
    secondMock: string;
    secondMockIcon?: string;
    thirdMock: string; 
    thirdMockIcon?: string;
    isRotate?: boolean;
}

const TripleMockup : FunctionComponent<TripleMockupProps> = ({firstMock, firstMockIcon, secondMock, secondMockIcon, thirdMock, thirdMockIcon, isRotate}) => {

    return (
        <div className="triple-mockup">
            <MockupPhone 
            content={<img src={firstMock} alt={firstMock} style={{width: '100%', height: '100%', borderRadius: '20px'}}/>}
            style={{paddingTop: '100px'}}
            icon={firstMockIcon}
            delay={250}
            zIndex={250}
            isRotate={isRotate}
            />
            <MockupPhone 
            content={<img src={secondMock} alt={secondMock} style={{width: '100%', height: '100%', borderRadius: '20px'}}/>}
            style={{marginLeft: '-100px'}}
            icon={secondMockIcon}
            delay={500}
            zIndex={500}
            isRotate={isRotate}
            />
            <MockupPhone 
            content={<img src={thirdMock} alt={thirdMock} style={{width: '100%', height: '100%', borderRadius: '20px'}}/>}
            style={{paddingTop: '150px', marginLeft: '-100px'}}
            icon={thirdMockIcon}
            zIndex={1000}
            delay={1000}
            isRotate={isRotate}
            />
        </div>
    )
}

export default TripleMockup;