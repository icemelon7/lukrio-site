import React, { useState } from 'react';
import './Trades.styles.css';

export type trades = {

}

const Trades = () => {

    const [isBear, setIsBear] = useState<boolean>(false);
    const [sort, setSort] = useState<string>("Amount");
    const [total, setTotal] = useState<number>();
    const [loading, setLoading] = useState<boolean>(true);
    const [period, setPeriod] = useState<string>("Today");
    const [data, setData] = useState<trades[]>([]);

    return (
        <>
            <div className="summary">

            </div>
            <div className="row">

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