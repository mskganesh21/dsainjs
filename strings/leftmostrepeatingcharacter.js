/*
naive solution
*/

const LeftMostRepeatingCharacter = (str) => {
  let n = str.length;
  
  for(let i=0;i<n;i++){
    let char = str[i];
    
    for(let j=i+1;j<n;j++){
      if(str[j] === char){
        return char;
      }
    }
  }
  
  return -1;
}

const result = LeftMostRepeatingCharacter("abcdefcdef");
console.log(result)
