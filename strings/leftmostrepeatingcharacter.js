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


/*
better approach
*/

const LeftMostRepeatingCharacter = (str) => {
  let n = str.length;
  let count = new Array(256).fill(0);
  for(let i = 0; i < n; i++) {
    count[str.charCodeAt(i)]++;
  }
  
  for(let i = 0; i < n; i++) {
    if(count[str.charCodeAt(i)] > 1) {
      return str.charAt(i);
    }
  }
  
  return -1;
}

const result = LeftMostRepeatingCharacter("abcd");
console.log(result);


/*
Efficient approach
*/

const LeftMostRepeatingCharacter = (str) => {
  let n = str.length;
  let visited = new Array(256).fill(false);
  let res = -1;
  for(let i=n-1;i>=0;i--){
    if(visited[str.charCodeAt(i)]){
    res = str.charAt(i);
  }
  
  visited[str.charCodeAt(i)] = true;
  }
  
  return res;
}

const result = LeftMostRepeatingCharacter("aabcbcd");
console.log(result);
