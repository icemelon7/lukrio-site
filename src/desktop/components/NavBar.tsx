import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import "./NavBar.styles.css";

const NavBar = (props: {isRelative?: boolean, isTransparent?: boolean}) => {
    return (
        <div style={{backgroundColor: props.isTransparent ? 'transparent' : '#092739', position: props.isRelative ? 'relative' : 'absolute'}} className="nav-bar">
            <Logo isLink style={{width: '15vw'}}/>
            <div className="nav-bar__links">
                <Link style={window.location.href.endsWith("/referral") ? {color: 'var(--teal-color)'} : undefined} className="nav-bar__links__link" to="/referral">Get $5!</Link>
                <Link style={window.location.href.endsWith("/how-to-play") ? {color: 'var(--teal-color)'} : undefined} className="nav-bar__links__link" to="/about/how-to-play">How To Play</Link>
                <Link  style={window.location.href.endsWith("/about/lukrio") ? {color: 'var(--teal-color)'} : undefined}className="nav-bar__links__link" to="/about/lukrio">About Us</Link>
                <Link  style={window.location.href.endsWith("/about/vision") ? {color: 'var(--teal-color)'} : undefined}className="nav-bar__links__link" to="/about/vision">The Vision</Link>
                <Link  style={window.location.href.endsWith("/about/leagues") ? {color: 'var(--teal-color)'} : undefined}className="nav-bar__links__link" to="/about/leagues">For Students</Link>
                <div className="nav-bar__links__button">
                    <Link className="nav-bar__links__button__link" to="www.appstore.com">Play Now</Link>
                </div>
            </div>
        </div>
    )
}


export default NavBar;