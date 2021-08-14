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


export function numFormatter(num : number) : string {
    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
    }else if(num > 1000000){
        return (num/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
    } else {
        return "" + num;  // if value < 1000, nothing to do
    }
  }