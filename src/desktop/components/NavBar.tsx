import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import "./NavBar.styles.css";

const NavBar = (props: {isHome?: boolean}) => {
    return (
        <div style={{backgroundColor: props.isHome ? 'transparent' : '#092739'}} className="nav-bar">
            <Logo style={{width: '15vw'}}/>
            <div className="nav-bar__links">
                <Link className="nav-bar__links__link" to="/referral">Get $5!</Link>
                <Link className="nav-bar__links__link" to="/about/how-to-play">How To Play</Link>
                <Link className="nav-bar__links__link" to="/about/lukrio">The App</Link>
                <Link className="nav-bar__links__link" to="/vision">The Vision</Link>
                <Link className="nav-bar__links__link" to="/resources">For Students</Link>
                <div className="nav-bar__links__button">
                    <Link className="nav-bar__links__button__link" to="www.appstore.com">Play Now</Link>
                </div>
            </div>
        </div>
    )
}


export default NavBar;