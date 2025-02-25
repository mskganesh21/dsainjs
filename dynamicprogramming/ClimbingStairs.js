/*

climbing stairs problem

1. you are given the number of steps
2. you'll have to tell in how many different ways we can climb the steps
3. each time you can climb 1 or 2 steps only


algorithm
1. break the problem into many sub problems
2. dynamic programming use recursion
3. write base cases 
here base cases are 1 step 1 way 
2 step 2 ways 
3 steps 3 ways


4. next recursively call the function 
i.e. calculate the number of ways using the base cases and then proceed 
calculating the no of different ways to climb n steps is sum of climbing n-1 steps and n-2 steps
because if we travel to the n-1 and n-2 steps then there are 3 ways to climb the remaining steps


*/

const ClimbingStairs = (n) => {
  if (n === 1) return 1; // Base case for 1 step
  if (n === 2) return 2; // Base case for 2 steps

  let dp = new Array(n + 1).fill(0);
  dp[1] = 1; // 1 way to climb 1 step
  dp[2] = 2; // 2 ways to climb 2 steps

  // Calculate the number of ways for each step from 3 onwards
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

console.log(ClimbingStairs(5)); // Output: 8
// 5steps 1 2 3 5 8
