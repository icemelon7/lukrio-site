import React, { FunctionComponent } from 'react';
import '../../App.css';
import './Redirect.styles.css';

type RedirectProps = {
    text: string;
    textColor?: string;
    url: string;
    bottomLeft?: boolean;
    noLink?: boolean;
}

const Redirect : FunctionComponent<RedirectProps> = ({text, textColor, url, bottomLeft, noLink}) => {

    if (noLink) {
        return (
            <div style={bottomLeft ? {color: textColor ? textColor : 'black', bottom: '3.5vh', left: '2vw'} : {color: textColor ? textColor : 'black', top: '1.5vh', right: '2vw'}} className="redirect">
                <span className="redirect__text link">{text} ⟶</span>
            </div>
        )
    } else {
        return (
            <a href={url} style={bottomLeft ? {color: textColor ? textColor : 'black', bottom: '3.5vh', left: '2vw'} : {color: textColor ? textColor : 'black', top: '1.5vh', right: '2vw'}} className="redirect">
                <span className="redirect__text link">{text} ⟶</span>
            </a>
        )    
    }
    
}

export default Redirect;