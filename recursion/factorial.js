function factorial(n){
  if(n === 0){
    return 1
  }
  if(n === 1){
    return 1
  }
  return n * factorial(n-1)
}

const result = factorial(5,1);

console.log(result)
