function countzeros(n,count){
  if(n === 0){
    return count;
  }
  
  let rem = n%10;
  let newnum = parseInt(n/10);
  if(rem === 0){
    return countzeros(newnum, count + 1);
  }
  
  return countzeros(newnum, count);
}

console.log(countzeros(20409,0))

