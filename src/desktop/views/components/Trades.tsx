import React, { useState } from 'react';
import { formatRoundUSD } from '../../../util/functions';
import './Trades.styles.css';
import Select from 'react-select';
import Switch from 'react-switch';
import Bull from '../../../assets/analytics/bull.png';
import Bear from '../../../assets/analytics/bear.png';
import { LightMode } from '../../../Colors';
export type trades = {

}

const Trades = () => {

    const [isBear, setIsBear] = useState<boolean>(false);
    const [sort, setSort] = useState<string>("Amount");
    const [total, setTotal] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);
    const [period, setPeriod] = useState<string>("Today");
    const [data, setData] = useState<trades[]>([]);
    const [type, setType] = useState<string>("Amount");

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
                    options={[{value: "Today", label: "Today"}, {value: "Week", label: "Week"}, {value: "Month", label: "Month"}, {value: "3 Months", label: "3 Months"}, {value: "6 Months", label: "6 Months"}]}
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
                
            </div>
            <div className="table">
                {

                }
            </div>
        </>
    )
}

export default Trades;