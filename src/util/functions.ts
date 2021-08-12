export const formatRoundUSD =  (x: number) : string => {
    if (x) {
        return `${x}`;
    } else {
        return "$0";
    }
}

export const formatDecimalUSD = (x: number) : string => {
    if (x) {
        return `$${x.toFixed(2)}`;
    } else {
        return "$0.00";
    }
}