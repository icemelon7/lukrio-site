import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as LukrioLogo} from '../../assets/Logo.svg';

const Logo = (props: {style: any}) => {
    return (
        <a href="/">
            <LukrioLogo style={props.style}/>
        </a>
    )
}

export default Logo;