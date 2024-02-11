function sumofdigits(n){
  if(n<=0){
    return 0;
  }
  let rem = n % 10;
  let newnum = parseInt(n/10);
  return rem + sumofdigits(newnum);
}


console.log(sumofdigits(1342))
