import React, { FunctionComponent } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './Counters.styles.css';
import CountUp from 'react-countup';

const Counters = () => {

    return (
        <div className='counters'>
            <Counter value={50} suffix="%+" text="der Suizide in Deutschland sind Jugendliche und durch Präventation verhinderbar" />
            <Counter prefix="Um " value={50} suffix="%" text="reduziert unser Präventions-programm YAM wissenschaftlich bewiesen Suizidversuche"/>
            <Counter prefix="Mit " value={50} suffix=" EUR" text="Spende können wir einen der 750.000 Deutschen Schülern pro Jahrgang erreichen"/>
        </div>
    )
}

type CounterProps = {
    value: number;
    text: string;
    prefix?: string;
    suffix?: string;
}

const Counter : FunctionComponent<CounterProps> = ({value, text, prefix, suffix}) => {

    return (
        <div className="counter">
            <ScrollAnimation animateIn="animate__fadeInUp" animateOnce delay={2000}><CountUp className="counter__value" delay={2} start={0} end={value} duration={3} prefix={prefix ?? ""} suffix={suffix ?? ""}/></ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeInUp" animateOnce delay={3000} className="counter__text">{text}</ScrollAnimation>
        </div>
    )
}

export default Counters;