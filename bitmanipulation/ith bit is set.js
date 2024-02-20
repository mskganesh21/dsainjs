/*
Q: given a number n and an index i, find whether the ith bit in binary representation is set or encodeURIComponent

example : 12 is 1100 and if i=0 then res is false
if i is 3 then res is true

to solve this
1. convert the no to binary
2. take another no say 1 and make this binary
3. now left shift the 1 i times
4. do the bitwise AND operation on n and 1
5. if it is 1 at the i then it is set;

*/

function isBitSet(n,i){
  let x = 1 << i;
  let res = (n & x) > 0;
  return res;
}

let res = isBitSet(12,0);
console.log(res);
