import React, { FunctionComponent } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import '../../../devices.css';
import './MockupPhone.styles.css';

type MockupPhoneProps = {
    content: JSX.Element;
    delay?: number;
    icon?: string;
    isRotate?: boolean;
    onClick?: (event: any) => void;
    style?: any;
    zIndex?: number;
}

const MockupPhone : FunctionComponent<MockupPhoneProps> = ({content, delay, icon, isRotate, onClick, style, zIndex}) => {

    if (delay) {
        return (
            <ScrollAnimation animateIn="animate__fadeInUp" animateOnce delay={delay} style={zIndex ? {zIndex: zIndex} : {}}>
            <div style={style} onClick={onClick} className={isRotate ? 'rotate-mockup mockup-phone' : 'mockup-phone'}>
            {
                icon ? 
                <div className="mockup-icon">
                    {icon}
                </div>
                :
                <div />
            }
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
            </ScrollAnimation>
        )
    } else {
        return (
            <div style={style} onClick={onClick} className={isRotate ? 'rotate-mockup mockup-phone' : 'mockup-phone'}>
                {
                    icon ? 
                    <div className="mockup-icon">
                        {icon}
                    </div>
                    :
                    <div />
                }
                
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
}

export default MockupPhone;