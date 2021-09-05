import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import "./NavBar.styles.css";

const NavBar = (props: {isRelative?: boolean, isTransparent?: boolean}) => {
    return (
        <div style={{backgroundColor: props.isTransparent ? 'transparent' : '#092739', position: props.isRelative ? 'relative' : 'absolute'}} className="nav-bar">
            <Logo isLink style={window.innerWidth < 1024 ? {width: '20vw'} : {width: '15vw'}}/>
            <div className="nav-bar__links">
                {//<Link style={window.location.href.endsWith("/referral") ? {color: 'var(--teal-color)'} : undefined} className="nav-bar__links__link" to="/referral">Get $5!</Link>
                }
                <Link style={window.location.href.endsWith("/how-to-play") ? {color: '#51b69a'} : undefined} className="nav-bar__links__link" to="/how-to-play">How To Play</Link>
                <Link  style={window.location.href.endsWith("/lukrio") ? {color: '#51b69a'} : undefined}className="nav-bar__links__link" to="/lukrio">About Us</Link>
                <Link  style={window.location.href.endsWith("/vision") ? {color: '#51b69a'} : undefined}className="nav-bar__links__link" to="/vision">The Vision</Link>
                <Link  style={window.location.href.endsWith("/analytics") ? {color: '#51b69a'} : undefined}className="nav-bar__links__link" to="/analytics">Analytics</Link>
                <Link  style={window.location.href.endsWith("/leagues") ? {color: '#51b69a'} : undefined}className="nav-bar__links__link" to="/leagues">For Students</Link>
                <div className="nav-bar__links__button">
                    <Link className="nav-bar__links__button__link" to="/referral">Get $5!</Link>
                </div>
            </div>
        </div>
    )
}


export default NavBar;