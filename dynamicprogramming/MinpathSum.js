/*
minimum path sum 
*/

const arr = [[5,9,6],[11,5,2]];

const MinimumPathSum = (arr) => {
  
  const m = arr.length;
  const n = arr[0].length;
  
  //recursive function
  const recursion = (i,j) => {
    if(i>=m || j>=n) return Infinity;
    
    if(i===m-1 && j === n-1) return arr[i][j];
    
    //move right or down
    const right = recursion(i,j+1);
    const down = recursion(i+1,j);
    
    return arr[i][j] + Math.min(right,down);
  };
  
  return recursion(0,0);
}

console.log(MinimumPathSum(arr));
