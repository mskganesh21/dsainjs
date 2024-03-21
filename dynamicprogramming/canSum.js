const canSum = (target,nums) => {
  if(target < 0) {
    return false
  }
  
  if(target === 0){
    return true
  }
  
  for(let num of nums) {
    const remainder = target - num;
    if(canSum(remainder,nums) === true){
      return true
    }
  }
  return false
}

console.log(canSum(7, [2,3]));
// console.log(canSum(300, [7,14]));
console.log(canSum(8, [2,3,5]));


const canSumDynamic = (target,nums,memo={}) => {
  if(target in memo){
    return memo[target]
  }
  if(target === 0){
    return true
  }
  
  if(target < 0){
    return false
  }
  
  for(let num of nums){
    const remainder = target - num;
    if(canSumDynamic(remainder,nums, memo) === true){
      memo[target] = true;
      return true
    }
  }
  
  memo[target] = false;
  return false
}

const results = canSumDynamic(300, [7,14]);
console.log(results)













