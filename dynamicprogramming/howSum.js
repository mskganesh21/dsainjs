function howSum (target,nums){
  if(target === 0) return []
  if(target < 0) return null
  
  for(let num of nums){
    const remainder = target - num;
    const resultofremainder = howSum(remainder,nums);
    if(resultofremainder !== null){
      return [...resultofremainder, num]
    }
  }
  
  return null
}

/*
tc
target : m
n = nums.length

o(n ^ m * m)

sc: o(m)

*/

console.log(howSum(7,[2,3]));


function howSumDynamic (target, nums, memo = {}){
  if(target in memo) return memo[target]
  if(target === 0) return []
  if(target < 0) return null
  
  for(let num of nums) {
    const remainder = target - num;
    const resultofremainder = howSumDynamic(remainder, nums, memo);
    if(resultofremainder !== null){
      memo[target] = [...resultofremainder, num];
      return memo[target]
    }
  }
  
  memo[target] = null
  return null
}

/*
tc: o((n*m) * m)
sc: o(m * m)
*/

const result = howSumDynamic(300, [7,14]);
console.log(result)








