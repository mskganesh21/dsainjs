/*
GRID TRAVELLER PROBLEM

*/

const gridTraveller = (m,n) => {
  if(m === 1 && n === 1) {
    return 1
  }
  
  if(m===0 || n===0){
    return 0
  }
  
  return gridTraveller(m-1, n) + gridTraveller(m,n-1)
}

const result = gridTraveller(3,3);
console.log(result);


const gridTravellerdynamic = (m,n, memo = {}) => {
  const key = m + ',' + n;
  if(key in memo) return memo[key];
  if(m === 1 && n === 1) return 1;
  if(m === 0 || n === 0) return 0;
  
  memo[key] = gridTravellerdynamic(m-1,n,memo)
  + gridTravellerdynamic(m,n-1,memo);
  
  return memo[key]
}

const result2 = gridTravellerdynamic(18,18);
console.log(result2);
