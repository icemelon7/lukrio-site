import React, { FunctionComponent } from 'react';
import '../../../devices.css';
import './MockupPhone.styles.css';

type MockupPhoneProps = {
    content: JSX.Element;
    isRotate?: boolean;
    onClick?: (event: any) => void;
    style?: any;
}

const MockupPhone : FunctionComponent<MockupPhoneProps> = ({content, isRotate, onClick, style}) => {

    return (
        <div style={style} onClick={onClick} className={isRotate ? 'rotate-mockup mockup-phone' : 'mockup-phone'}>
            <div className="device device-iphone-x">
                <div className="device-frame">
                    {content}
                </div>
                <div className="device-stripe"></div>
                <div className="device-header"></div>
                <div className="device-sensors"></div>
                <div className="device-btns"></div>
                <div className="device-power"></div>
            </div>
        </div>
        
    )
}

export default MockupPhone;