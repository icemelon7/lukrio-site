import React from 'react';
import "./Footer.styles.css";

const Footer = () => {

    return (
        <div className="footer">
            <div className="footer__row">
                <Section title="About" links={[
                    {name: "About Lukrio", url: "www.lukrio.com/about/lukrio"},
                    {name: "FAQ", url: "www.lukrio.com/about/faq"},
                    {name: "How To Play", url: "www.lukrio.com/about/how-to-play"},
                    {name: "News", url: "www.lukrio.com/about/news"},
                    {name: "Responsible Gaming", url: "www.lukrio.com/about/responsible-gaming"},
                ]}/>
                <Section title="Play" links={[
                    {name: "Download Lukrio (iOS)", url: "appstore.com"},
                    {name: "Coming Soon: Lukrio (Anroid)", url: "", deactivated: true},
                    {name: "Comiong Soon: Lukrio (Web)", url: "", deactivated: true},
                    {name: "Restrictions", url: "www.lukrio.com/play/restrictions"},
                    {name: "Rules TL;DR", url: "www.lukrio.com/play/rules"}
                ]}/>
            </div>
            <Line />
        </div>
    )
}

const Section = (props: {title: string, links: {name: string, url: string, deactivated?: boolean}[]}) => {
    return (
        <div className="footer__section">
            <p>{props.title}</p>
            <div>
                {
                    props.links.map((value, index) =>
                    value.deactivated ?
                    <p>{value.name}</p>
                    :
                    <a href={value.url}>{value.name}</a>)
                }
            </div>
        </div>
    )
}

const Line = () => {
    return (
        <div />
    )
}

export default Footer;