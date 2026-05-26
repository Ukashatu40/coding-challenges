/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0];
  let profit = 0;

  for (price of prices) {
    if (price < min) {
      min = price;
    }

    profit = Math.max(profit, price - min);
  }

  return profit;
};
