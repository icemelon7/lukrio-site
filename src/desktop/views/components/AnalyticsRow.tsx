import React, { FunctionComponent, useState } from 'react';
import { useEffect } from 'react';
import { numFormatter } from '../../../util/functions';
import { rowStyles } from './Trades';
import './AnalyticsRow.styles.css';

interface RowProps {
    symbol: string;
    isUser: boolean;
    bullAmount: number;
    bullTrades: number;
    bullUsers: number;
    bearAmount: number;
    bearTrades: number;
    bearUsers: number;
}

const AnalyticsRow : FunctionComponent<RowProps> = ({symbol, isUser, bullAmount, bullTrades, bullUsers, bearAmount, bearTrades, bearUsers}) => {

    const [link, setLink] = useState(`https://eodhistoricaldata.com/img/logos/US/${symbol}.png`);

    useEffect(() => {
        setLink(`https://eodhistoricaldata.com/img/logos/US/${symbol}.png`);
    }, [symbol]);

    return (
        <div className="analytics__row">
            <div className="analytics__row__line"/>
            <div className="analytics__row__inner">
                <div style={rowStyles.first} className="anlytics__row__symbol">
                    <img src={link} alt={symbol} className="analytics__row__inner__first__img"/>
                    {symbol}
                </div>
                <div style={rowStyles.second} className="analytics__row__bull__amount">{numFormatter(bullAmount)}</div>
                <div style={rowStyles.third} className="analytics__row__text">{isUser ? numFormatter(bullUsers) : numFormatter(bullTrades)}</div>
                <div style={rowStyles.fourth} className="analytics__row__bear__amount">{numFormatter(bearAmount)}</div>
                <div style={rowStyles.fifth} className="analytics__row__text">{isUser ? numFormatter(bearUsers) : numFormatter(bearTrades)}</div>
            </div>
        </div>
    )
}

export default AnalyticsRow;