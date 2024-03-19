/*
Nth fibonaaci number

fib(n){
  if(n === 0){
    return 0
  }
  
  if(n === 1){
    return 1
  }
  
  return fib(n-1) + fib(n-2);
}

*/

/*
return the trailing zeros in factorial of n

brute force
1. calculate factorial
2. count zeros at end

function fact (n) {
  if(n === 0 || n === 1){
    return 1;
  }
  
  return n * fact(n-1);
}

counting zeros

function countTrailingZeros(number) {
    let count = 0;
    while (number % 10 === 0) {
        count++;
        number /= 10;
    }
    return count;
}


approach 2
count the power of 5 as a factor 
then we get the number of zeros

5^x * k = n!;

for this take the math.floor of n/5

for 28! we will have n/5 and n/25

so generallised formula is 


here's the code

function num(n){
  let res = 0;
  let powerof5 = 5;
  

  
  while(n >= powerof5){
      res = res + Math.floor((n/powerof5));
  
  powerof5 = powerof5 * 5;
  }
  
  return res;
}

console.log(num(200));

*/













