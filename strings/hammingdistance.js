function hammingdistance (n1,n2){
  // this is xor operation it will result in 1 if both bits are different
  // else it will return 0
  let x = n1 ^ n2;
  let setBits = 0;
  // while loop for traversing through the bits
  while(x > 0){
    // we are increasing count by 1 if the xor is 1
    setBits += x & 1;
    // we are moving to the next bit
    x >>= 1;
  }
  return setBits;
}

let n1 = 9;
let n2 = 14;

console.log(hammingdistance(n1,n2))
