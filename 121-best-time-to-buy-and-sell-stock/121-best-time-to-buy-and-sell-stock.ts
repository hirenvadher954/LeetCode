function maxProfit(prices: number[]): number {
    let buy: number = prices[0];
    let max_profits: number = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < buy)
            buy = prices[i];
        else if (prices[i] - buy>= max_profits) {
            max_profits = prices[i] - buy;
        }
    }

    return max_profits;
}