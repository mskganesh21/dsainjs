function maxProfit(arr){
  let buyPrice = arr[0];
  let profit = 0;
  for (let i =1; i < arr.length; i++) {
    // if the current price is less than the buy price
    if(arr[i] < buyPrice){
      buyPrice = arr[i]
    } else {
      // check if we can get a better profit
      let curr = arr[i] - buyPrice;
      profit = Math.max(curr, profit);
    }
  }
  
  return profit;
}

let prices = [7,1,5,3,6,4]

console.log(maxProfit(prices));
