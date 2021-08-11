import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Style } from 'util';
import {ReactComponent as LukrioLogo} from '../../assets/Logo.svg';

type LogoProps = {
    style: any;
    isLink?: boolean;
}

const Logo : FunctionComponent<LogoProps> = ({style, isLink}) => {
    if (isLink) {
        return (        
            <a href="/">
                <LukrioLogo style={style}/>
            </a>
        )
    } else {
        return (
            <LukrioLogo style={style}/>
        )
    }
}

export default Logo;