/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {

    //Edge case for if there's only 1
    if (prices.length == 1) return 0;

    let profit = 0;
    let minPrice = prices[0]


    for (let i = 1; i < prices.length; i++)
    {
        if(prices[i] < minPrice) minPrice = prices[i]
        else
        {
            profit = Math.max(profit,prices[i] - minPrice)
        }
    }
    return profit

    // let lowestIndexes = [0];
    // let profit = 0;

    // for(const i in prices)
    // {
    //     if(prices[i] < prices[lowestIndexes[lowestIndexes.length-1]]) lowestIndexes.push(parseInt(i));
    // }

    // for(const i in lowestIndexes)
    // {
    //     for (let j = lowestIndexes[i]; j< prices.length; j ++)
    //     {
    //         profit = Math.max(profit, prices[j] - prices[lowestIndexes[i]])
    //     }
    // }
    // //console.log(lowestIndexes)

    // return profit;
};


console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([1,2]))
console.log(maxProfit([2,4,1]))