const maxProfit = (prices) => {
  let currmin = prices[0];
  let curmax = 0;
  
  for(let i=0;i<prices.length;i++){
    currmin = Math.min(prices[i], currmin);
    curmax = Math.max(curmax, prices[i] - currmin);
  }
  
  return curmax;
}

const prices = [7,1,5,3,6,4];
const result = maxProfit(prices);
console.log(result)
