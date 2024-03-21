/*
DYNAMIC PROGRAMMING



*/

const fib = (n, memo = {}) => {
  if(n in memo ) {
    return memo[n]
  }
  if(n <= 2){
    return 1
  }
  
  memo[n] = fib(n-1,memo) + fib(n-2,memo);
  return memo[n]
}

const result = fib(50);
console.log(result)
