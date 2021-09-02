import { EXPO_SERVER_URL, WEBSITE_JWT } from "../env";

export interface tradeStats {
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

export interface totalTradeStats {
    data: tradeStats[];
    total: number;
}

export const getTradeStats = async (isBull: boolean, sort: string, period: string) : Promise<totalTradeStats> => {
    return new Promise<totalTradeStats>(async (resolve, reject) => {
        try {
            const requestOptions = {
                method: "GET",
                headers: {
                    authorization: WEBSITE_JWT
                }
            };
            const response = await fetch(EXPO_SERVER_URL.concat(`/stock/stats/${isBull ? "bull" : "bear"}/trades/${sort}/${period}`), requestOptions);
            if (response.status === 200) {
                let data = await response.json();
                return resolve(data);
            } else if (response.status !== 500) {
                let data = await response.json();
                return reject(data.message);
            } else {
                throw new Error();
            }
        } catch (e) {
            return reject(`Failed to fetch total ${isBull ? "bull" : "bear"} trade stats. Please try again later... :)`)
        }
    })
}