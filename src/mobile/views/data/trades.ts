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

export const bullTradeTotals : {[key: string]: number} = {
    Today: 3200000,
    Week: 12700000,
    Month: 324738000,
    '3 Months': 968573040,
    '6 Months': 1789034830,
    'Year': 3459347840,
}

export const bearTradeTotals : {[key: string] : number} = {
    Today: 3200000,
    Week: 12700000,
    Month: 324738000,
    '3 Months': 968573040,
    '6 Months': 1789034830,
    'Year': 3459347840,
}

export const bullTrades : {[key: string] : {[key: string] : tradeStats[]}} = {
    Today: {
        Amount: [],
        Trades: [],
        Users: []
    },
    Week: {
        Amount: [],
        Trades: [],
        Users: []
    },
    Month: {
        Amount: [],
        Trades: [],
        Users: []
    },
    '3 Months': {
        Amount: [],
        Trades: [],
        Users: []
    },
    '6 Months': {
        Amount: [],
        Trades: [],
        Users: []
    },
    Year: {
        Amount: [],
        Trades: [],
        Users: []
    },
}

export const bearTrades : {[key: string] : {[key: string] : tradeStats[]}} = {
    Today: {
        Amount: [],
        Trades: [],
        Users: []
    },
    Week: {
        Amount: [],
        Trades: [],
        Users: []
    },
    Month: {
        Amount: [],
        Trades: [],
        Users: []
    },
    '3 Months': {
        Amount: [],
        Trades: [],
        Users: []
    },
    '6 Months': {
        Amount: [],
        Trades: [],
        Users: []
    },
    Year: {
        Amount: [],
        Trades: [],
        Users: []
    },
}