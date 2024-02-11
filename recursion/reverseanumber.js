let sum = 0;

function reverseofdigits(n){
  if(n === 0){
    return;
  }
  let rem = n % 10;
  sum = sum * 10 + rem;
  let newnum = parseInt(n/10);
  return reverseofdigits(newnum);
}


reverseofdigits(1342);

console.log(sum);
