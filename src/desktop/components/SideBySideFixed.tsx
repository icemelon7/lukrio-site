import React, { FunctionComponent } from 'react';
import './SideBySideFixed.styles.css';

type SideBySideFixedProps = {
    header?: string;
    imgPos: "left" | "right";
    firstMock: string;
    secondMock?: string;
    thirdMock?: string;
    content: JSX.Element;
}

const SideBySideFixed : FunctionComponent<SideBySideFixedProps> = ({header, imgPos, firstMock, secondMock, thirdMock, content, }) => {

    return (
        <div className="side-fixed">
            <div className="left">

            </div>
        </div>
    )
}

export default SideBySideFixed;