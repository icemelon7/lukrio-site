import React from 'react';
import "./Footer.styles.css";
import Logo from './Logo';
import {ReactComponent as InstaLogo} from '../../assets/socials/logo-instagram.svg';
import {ReactComponent as LinkedInLogo} from '../../assets/socials/logo-linkedin.svg';
import {ReactComponent as TwitterLogo} from '../../assets/socials/logo-twitter.svg';
const Footer = () => {

    return (
        <div className="footer">
            <div className="footer__row">
                <Section title="About" links={[
                    {name: "How To Play", url: "about/how-to-play"},
                    {name: "The Vision", url: "about/vision"},
                    {name: "About Us", url: "about/lukrio"},
                    {name: "Lukrio Leagues", url: "about/leagues"},
                    {name: "Lukrio Analytics", url: "about/analytics"},
                ]}/>
                <Section title="Play" links={[
                    {name: "Download Lukrio (iOS)", url: "https://www.appstore.com"},
                    {name: "Coming Soon: Lukrio (Anroid)", url: "", deactivated: true},
                    {name: "Coming Soon: Lukrio (Web)", url: "", deactivated: true},
                ]}/>
            </div>
            {//<Line />
            }
            <div className="footer__row">
                <Section title="Support" links={[
                    {name: "Responsible Gaming", url: "support/responsible-gaming"},
                    {name: "Restrictions", url: "support/restrictions"},
                    {name: "Rules TL;DR", url: "support/rules"},
                    {name: "Careers", url: ""}
                ]}/>
                <div className="footer__copyright">
                    <Logo style={{width: '10vw', marginBottom: '1vh'}} />
                    
                    <div className="footer__copyright__row">
                        
                        <div className="footer__copyright__row__legal">
                            <a className="footer__copyright__row__legal__link" href="www.lukrio.com/privacy">Privacy Policy</a>
                            <div className="footer__copyright__row__legal__spacer">|</div>
                            <a className="footer__copyright__row__legal__link" href="www.lukrio.com/tou">Terms of Use</a>
                        </div>
                        <div className="footer__copyright__row__socials">
                            <div className="footer__copyright__row__socials__outer">
                                <InstaLogo onClick={() => window.location.href="https://www.instagram.com/lukriofinance/"} className="footer__copyright__row__social__inner" />
                            </div>
                            <div className="footer__copyright__row__socials__outer">
                                <LinkedInLogo onClick={() => window.location.href="https://www.linkedin.com/company/72006898/"} className="footer__copyright__row__social__inner" />
                            </div>
                            <div className="footer__copyright__row__socials__outer">
                                <TwitterLogo onClick={() => window.location.href="https://twitter.com/lukrio_finance"} className="footer__copyright__row__social__inner" />
                            </div>
                        </div>
                    </div>
                    <div className="footer__copyright__text">© 2021 Lukrio (Lucrative Technologies LLC). All Rights Reserved.</div>
                </div>
            </div>
            
        </div>
    )
}

const Section = (props: {title: string, links: {name: string, url: string, deactivated?: boolean}[]}) => {
    return (
        <div className="footer__section">
            <div className="footer__section__header">{props.title}</div>
            <div className="footer__section__inner">
                {
                    props.links.map((value, index) =>
                    value.deactivated ?
                    <div className="footer__section__inner__text">{value.name}</div>
                    :
                    <div className="footer__section__inner__link-container">
                        <a className="footer__section__inner__link" href={value.url}>{value.name}</a>
                    </div>
                    )
                }
            </div>
        </div>
    )
}

const Line = () => {
    return (
        <div className="footer__line"/>
    )
}

export default Footer;