import React from 'react';
import Splash from '../components/Splash';
import {ReactComponent as AnalyticsFigma} from '../../assets/figmaIcons/analytics.svg';
import Analytics from '../../desktop/views/Analytics';
import Counters from '../views/Counters';

const AnalyticsPage = () => {

    return (
        <div className="analytics-page">
            <Splash 
            header="Lukrio Analytics" 
            text="As part of the Lukrio platform, see what others are investing in. Aggregated statistics on trades and positions across all Lukrio users."
            right={<AnalyticsFigma style={{width: '100%', height: 'auto', objectFit: 'contain'}} />}
            />
            <Analytics />
            <Counters />
        </div>
    )
}

export default AnalyticsPage;