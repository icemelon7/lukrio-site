import React from 'react';
import Splash from '../components/Splash';
import {ReactComponent as AnalyticsFigma} from '../../assets/figmaIcons/analytics.svg';
import Analytics from '../views/Analytics';

const AnalyticsPage = () => {

    return (
        <div className="analytics-page">
            <Splash 
            header="Lukrio Analytics" 
            text="See what others are investing in and get a feel for bull & bear market sentiment. Satisfy your curiosity or use as trade signals."
            right={<AnalyticsFigma style={{width: '100%', height: 'auto', objectFit: 'contain'}} />}
            />
            <Analytics />
        </div>
    )
}

export default AnalyticsPage;