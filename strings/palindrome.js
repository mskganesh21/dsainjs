//strings valid palindrome
// any sequence that reads the same forward or backward
// racecar, malayalam, 12344321
// if length is odd then middle char is not repeated
/*
1. reverse string and compare char at each index
2.  2 pointer approach
i++ , j--, when i>j break the loop or when i==j 
*/

function palindrome(s){
  if(typeof s !== 'string'){
    return;
  }
  
  let i=0;
  let j= s.length -1;
  
  while(i<j){
    if(s.charAt(i) === s.charAt(j)){
      i++;
      j--
    } else {
      return false
    }
  }
  
  return true;
}

let str = 'racecar';

console.log(palindrome(str))
