import React, { FunctionComponent } from 'react';
import './FounderBlock.styles.css';
import ScrollAnimation from 'react-animate-on-scroll';

type FounderBlockProps = {
    image: string | JSX.Element;
    name: string;
    title: string;
    text: string;
    delay: number;
}

const FounderBlock : FunctionComponent<FounderBlockProps> = ({image, name, title, text, delay}) => {

    return (
        <ScrollAnimation animateIn="animate__fadeInUp" animateOnce className="founder__block" delay={delay}>
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
        </ScrollAnimation>
    )
}

export default FounderBlock;