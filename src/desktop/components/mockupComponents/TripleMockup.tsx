import React, { FunctionComponent } from 'react';
import './TripleMockup.styles.css';
import '../../../devices.css';
import MockupPhone from './MockupPhone';
import 'animate.css/animate.min.css';

type TripleMockupProps = {
    firstMock: string;
    secondMock: string;
    thirdMock: string; 
}

const TripleMockup : FunctionComponent<TripleMockupProps> = ({firstMock, secondMock, thirdMock}) => {

    return (
        <div className="triple-mockup animate__animated animate__fadeInDown">
            <MockupPhone 
            content={<img src={firstMock} alt={firstMock} style={{width: '100%', height: '100%', borderRadius: '20px'}}/>}
            style={{paddingTop: '100px'}}
            />
            <MockupPhone 
            content={<img src={secondMock} alt={secondMock} style={{width: '100%', height: '100%', borderRadius: '20px'}}/>}
            style={{marginLeft: '-100px'}}
            />
            <MockupPhone 
            content={<img src={thirdMock} alt={thirdMock} style={{width: '100%', height: '100%', borderRadius: '20px'}}/>}
            style={{paddingTop: '100px', marginLeft: '-100px'}}
            />
        </div>
    )
}

export default TripleMockup;