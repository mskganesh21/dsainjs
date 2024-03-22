/*
BEST SUM
*/

const bestSum = (target,nums) => {
    if(target === 0) return [];
    if(target < 0) return null;
    
    let shortestCombination = null;
    for(let num of nums){
      const remainder = target - num;
      const remainderCombination =  bestSum(remainder, nums);
      if(remainderCombination !== null){
        const combination = [...remainderCombination,num];
        if(shortestCombination === null || combination.length < shortestCombination.length){
          shortestCombination = combination
        }
        
      }
    }
    
    /*
    tc: o(n^m * m)
    sc: o(m * m)
    */
    
    return shortestCombination
}

console.log(bestSum(7,[5,3,4,7]))


const bestSumDynamic = (target, nums, memo={}) => {
  if(target in memo) return memo[target];
  if(target === 0) return [];
  if(target < 0) return null;
  
  let shortestCombination = null;
  
  for(let num of nums){
    const remainder = target - num;
    const remainderCombination = bestSumDynamic(remainder,nums,memo);
    if(remainderCombination !== null){
      const combination = [...remainderCombination,num];
      if(shortestCombination === null || combination.length < shortestCombination.length){
        shortestCombination = combination
      }
    }
  }
  memo[target] = shortestCombination;
  return shortestCombination
  
  /*
  tc: o(m*n * m)
  sc: o(m* m)
  */
}

const result = bestSumDynamic(100,[1,2,5,25]);
console.log(result)

