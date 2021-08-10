import React from 'react';
import '../../App.css';
import './Redirect.styles.css';

const Redirect = (props: {text: string, textColor?: string, url: string}) => {

    return (
        <a href={props.url} style={{color: props.textColor ? props.textColor : 'black'}}className="redirect">
            <span className="redirect__text link">{props.text} ⟶</span>
        </a>
    )
}

export default Redirect;