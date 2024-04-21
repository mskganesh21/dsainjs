const HouseRobber = (arr) => {
  let n = arr.length;
  if(n === 0) return 0;
  if(n === 1) return arr[0];
  
  let dp = Array(n+1).fill(0);
  
  // base cases
  dp[0] = arr[0];
  dp[1] = Math.max(arr[0], arr[1]);
  for(let i=2;i<n;i++){
    dp[i] = Math.max(arr[i] + dp[i-2],dp[i-1])
  }
  
  return dp[dp.length-1];
}

const arr=[2,9,7,3,1];
const result = HouseRobber(arr);
console.log(result);
