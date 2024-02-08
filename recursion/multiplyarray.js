function multiply(arr,n, total = 1){
  if(n<1){
    return total;
  }
  return multiply(arr,n-1, total = arr[n-1] * total)
}

console.log(multiply([1,2,3,4,5],5,1))
