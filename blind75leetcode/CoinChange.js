const CoinChange = (coins,amount) => {
    let dp = Array(amount +1).fill(Infinity);
    
    dp[0] = 0;
    
    for(let curr = 1;curr<=amount;curr++){
      for(let coin of coins){
        if(curr - coin >=0){
          dp[curr] = Math.min(dp[curr], 1 + dp[curr-coin])
        }
      }
    }
    
    return dp[amount] > amount ? -1: dp[amount]
}

const arr = [1,3,4,5];
const result = CoinChange(arr,7);
console.log(result);
