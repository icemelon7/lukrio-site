import React, { useState } from 'react';
import './AnalyticsPhone.styles.css';
import Positions from './Positions';
import Trades from './Trades';
import {ReactComponent as StatusBar} from '../../../assets/mockups/statusbar.svg';

const AnalyticsPhone = () => {

    const [showTrades, setShowTrades] = useState<boolean>(true);
    const today = new Date();

    return (
        <div className="phone">
            <div className="phone__local">
                {`${("" + (today.getHours() + 1)).padStart(2, ' ')}:${("" + today.getMinutes()).padStart(2, '0')}`}
                <StatusBar style={{width: '20%', height: 'auto', objectFit: 'contain'}}/>
            </div>
            <div className="phone-row">
                <div onClick={() => setShowTrades(true)} style={showTrades ? {color: 'var(--linkBlue)', borderBottomColor: 'aqua', borderBottomWidth: '4px'} : {}} className="selector">Trades</div>
                <div onClick={() => setShowTrades(false)} style={!showTrades ? {color: 'var(--linkBlue)', borderBottomColor: 'aqua', borderBottomWidth: '4px'} : {}} className="selector">Positions</div>
            </div>
            {
                showTrades
                ?
                <Trades />
                :
                <Positions />
            }
        </div>
    )
}

export default AnalyticsPhone;