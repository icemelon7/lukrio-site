import React, { FunctionComponent, useEffect, useState } from 'react';
import { formatRoundUSD } from '../../../util/functions';
import './Trades.styles.css';
import Select from 'react-select';
import Switch from 'react-switch';
import Bull from '../../../assets/analytics/bull.png';
import Bear from '../../../assets/analytics/bear.png';
import { LightMode } from '../../../Colors';
import Header from './Header';
import { getTradeStats } from '../../../fetchers/analytics';
export type tradeStats = {
    _id: string;
    lA: number;
    sA: number;
    lV: number;
    sV: number;
    lU: string[];
    sU: string[];
    lN: number;
    sN: number;
}

export const rowStyles = {
    first: {
        width: '20%',
        height: '5%',
        display: 'flex',
        alignItems: 'center'
    },
    second: {
        width: '15%',
        height: '5%',
        display: 'flex',
        alignItems: 'center'
    },
    third: {
        width: '25%',
        height: '5%',
        display: 'flex',
        alignItems: 'center'
    },
    fourth: {
        width: '15%',
        height: '5%',
        display: 'flex',
        alignItems: 'center'
    },
    fifth: {
        width: '25%',
        height: '5%',
        display: 'flex',
        alignItems: 'center'
    }
};

const Trades = () => {

    const [isBear, setIsBear] = useState<boolean>(false);
    const [sortCol, setSortCol] = useState<string>("Symbol");
    const [isSortDown, setIsSortDown] = useState<boolean>(true);
    const [total, setTotal] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);
    const [period, setPeriod] = useState<string>("Today");
    const [data, setData] = useState<tradeStats[]>([]);
    const [type, setType] = useState<string>("Amount");

    const _handleSelectorPress = (col : string) =>  {
        // changed column, default sort decreasing
        if (col !== sortCol) {
          if (col === 'Symbol') {
            //sort alphabetically
            setData(data.sort((a, b) => a._id.localeCompare(b._id)));
          } else if (col === 'Bull $') {
            setData(data.sort((a, b) => b.lV - a.lV));
          } else if (col === 'Bull Trades') {
            setData(data.sort((a, b) => b.lA - a.lA));
          } else if (col === 'Bull Users') {
            setData(data.sort((a, b) => b.lN - a.lN));
          } else if (col === 'Bear $') {
            setData(data.sort((a, b) => b.sV - a.sV));
          } else if (col === 'Bull Trades') {
            setData(data.sort((a, b) => b.sA - a.sA));
          } else if (col === 'Bull Users') {
            setData(data.sort((a, b) => b.sN - a.sN));
          }
          setSortCol(col);
          setIsSortDown(true);
        } else {
          //same column, so invert order
          let temp = data;
          setData(temp.reverse());
          if (isSortDown) {
            // used to be sorted decreasing,
            setIsSortDown(false);
          } else {
            setIsSortDown(true);
          }
        }
    }

   
    useEffect(() => {
      const _loadTradeStats = async () => {
        setLoading(true);
        try {
            let data = await getTradeStats(!isBear, type, period);
            setTotal(data.total);
            setData(data.data);
            setLoading(false);
        } catch (e) {
            alert(e);
        }
    }
      _loadTradeStats();
    }, [isBear, type, period]);



    return (
        <>
            <div className="summary">
                <div className="summary__left">
                    <div className="summary__left__header">Total {isBear ? "Bearish" : "Bullish"} Investment</div>
                    <div className="summary__left__sub">Top 10 assets sorted by investment amount</div>
                </div>
                <div style={total >= 0 ? {color: LightMode.green} : {color: LightMode.red}} className="summary__right">{formatRoundUSD(total)}</div>                
            </div>
            <div className="trades-row">
                <div style={{width: '35%', marginRight: '5%', fontSize: '30px !important'}}>
                    <Select
                    options={[{value: "Amount", label: "Amount"}, {value: "Trades", label: "Trades"}, {value: "Users", label: "Users"}]}
                    onChange={(value) => setType(value?.value as string)}
                    defaultValue={{value: "Amount", label: "Amount"}}
                    />  
                </div>
                <div style={{width: '35%'}}>
                    <Select
                    options={[{value: "Today", label: "Today"}, {value: "Week", label: "Week"}, {value: "Month", label: "Month"}, {value: "3 Months", label: "3 Months"}, {value: "6 Months", label: "6 Months"}, {value: "Year", label: "Year"}]}
                    onChange={(value) => setType(value?.value as string)}
                    defaultValue={{value: "Week", label: "Week"}}
                    style={{option: (provided: any, state: any) => ({ color: '#048320', fontSize: '30px'}),
                            singleValue: (provided: any, state: any) => ({color: 'red'})}}
                    />  
                </div>
                <div className="trades-row__bearbull">
                    <Switch  checked={isBear} onChange={(value) => setIsBear(value)}
                    onColor={LightMode.red}
                    offColor={LightMode.teal}
                    onHandleColor={LightMode.lightRed}
                    offHandleColor={LightMode.lightTeal}
                    checkedIcon={<div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><img src={Bull} alt="Bull" style={{alignSelf: 'center', justifySelf: 'center', maxWidth: '80%', maxHeight: '80%', objectFit: 'contain'}}/></div>}
                    uncheckedIcon={<div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><img src={Bear} alt="Bear" style={{maxWidth: '80%', maxHeight: '80%', objectFit: 'contain'}}/></div>}
                    />
                </div>
            </div>
            <div className="selector-row">
                <Header text="Symbol" style={rowStyles.first} sortCol={sortCol} isSortDown={isSortDown} handle={_handleSelectorPress}/>
                <Header text="Bull $" style={rowStyles.second} sortCol={sortCol} isSortDown={isSortDown} handle={_handleSelectorPress}/>
                <Header text={type === 'Users' ? 'Bull Users' : 'Bull Trades'} style={rowStyles.third} sortCol={sortCol} isSortDown={isSortDown} handle={_handleSelectorPress}/>
                <Header text="Bear $" style={rowStyles.fourth} sortCol={sortCol} isSortDown={isSortDown} handle={_handleSelectorPress}/>
                <Header text={type === 'Users' ? 'Bear Users' : 'Bear Trades'} style={rowStyles.fifth} sortCol={sortCol} isSortDown={isSortDown} handle={_handleSelectorPress}/>
            </div>
            <div className="table">
                {

                }
            </div>
        </>
    )
}

export default Trades;