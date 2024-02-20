/*
bit manipulation is a very good technique used in dsa questions
to convert base 10 to binary we use number.toString(2)
left shift is to shift the bits to the left which means 
removing the most significant bit and adding a 0 as the least significant bit

if we left shift then n = n * 2^i;
if we right shift then n = n / 2^i;

right shift is the opposite of left shift
*/

function binary(n,l){
  console.log(n.toString(2), "n");
  
  let lsno = n << l;
  
  console.log(lsno, "mdofi")
  
  console.log(lsno.toString(2), "ls")
}

binary(22,1);
