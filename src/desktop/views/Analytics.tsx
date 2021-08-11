import React, { FunctionComponent } from 'react';
import Redirect from '../components/Redirect';
import './Analytics.styles.css';
import '../../devices.css';
import '../App.css';
import Logo from '../components/Logo';
import Clock from 'react-live-clock';

type AnalyticsProps = {
    moreLink?: boolean;
}

const Analytics : FunctionComponent<AnalyticsProps> = ({moreLink}) => {

    const t = new Date();
    const today = new Date(t.toLocaleString('en-US', { timeZone: 'America/New_York'}));
    console.log(today.getDay() + ' ' + today.getHours());
    return (
        <div className="analytics">
            {
                moreLink ? 
                <Redirect text="Learn more about Lukrio analytics" url="about/analytics"/>
                :
                <div/>
            }
            <div className="analytics__left">
                <div className="analytics__phone">
                    <div className="device device-iphone-x">
                        <div className="device-frame">
                            
                        </div>
                        <div className="device-stripe"></div>
                        <div className="device-header"></div>
                        <div className="device-sensors"></div>
                        <div className="device-btns"></div>
                        <div className="device-power"></div>
                    </div>
                </div>
                {
                        today.getDay() > 0 && today.getDay() < 6 && (((today.getHours() === 9 && today.getMinutes() >= 30) || today.getHours() > 9) && today.getHours() < 17)
                        ?
                        <div className="analytics__container__row__live">
                            <div className="analytics__container__row__live__dot"/>
                            U.S. Markets Open
                            <div className="analytics__container__row__live__clock">
                                (<Clock ticking format="HH:mm:ss" timezone="America/New_York"/>)
                            </div>
                        </div>
                        :
                        <div className="analytics__container__row__closed">
                            U.S. Markets Closed
                            <div className="analytics__container__row__live__clock">
                                (<Clock ticking format="HH:mm:ss" timezone="America/New_York"/>)
                            </div>
                        </div>
                }
            </div>
            
            
            <div className="analytics__container">
                <a href="/about/analytics" className="analytics__container__header link">Lukrio Analytics</a>
                <div className="analytics__container__text">
                    Get a feel for bearish or bullish market sentiment and see what people's favourite stocks are.
                </div>
                <div className="analytics__container__text">
                    Satisfy your curiosity or use as alternative data to inform your trades.
                </div>
                <div className="analytics__container__demo">
                        Try out live interactive demo on the left
                </div>
                <a href="https://www.appstore.com" className="analytics__container__available">
                    Available in the
                    <Logo style={{height: '1.6vw', width: 'auto', objectFit: 'contain', marginLeft: '0.4vw', marginRight: '0.4vw'}}/>
                    App
                </a>
            </div>
        </div>
    )
}

export default Analytics;