function sum(n, total = 0){
  if(n <= 0){
    return total;
  }
  return sum(n-1, total + n);
}

const result = sum(5);
console.log(result)
