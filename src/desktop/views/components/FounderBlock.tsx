import React, { FunctionComponent } from 'react';
import './FounderBlock.styles.css';

type FounderBlockProps = {
    image: string | JSX.Element;
    name: string;
    title: string;
    text: string;
}

const FounderBlock : FunctionComponent<FounderBlockProps> = ({image, name, title, text}) => {

    return (
        <div className="founder__block">
            {
                typeof image === 'string' ?
                <div className="founder__block__image">
                    <img src={image} alt={image} className="founder__block__image__actual"/>
                </div>
                :
                image
            }
            <div className="founder__block__right">
                <div className="founder__block__right__header">
                    <h3 className="founder__block__right__header__name">{name}</h3>
                    <h6 className="founder__block__right__header__title">{title}</h6>
                </div>
                {//React Collapsible??
                }
                <div className="founder__block__right__text">{text}</div>
            </div>
        </div>
    )
}

export default FounderBlock;