const fibonaaci = (n,memo={}) => {
  if(n in memo) return memo[n]
  if(n <=2) return 1;
  let result = fibonaaci(n-1,memo) + fibonaaci(n-2,memo)
  memo[n] = result;
  return result;
  
}

console.log(fibonaaci(50));


const gridTraveller = (m,n,memo={}) => {
  if(m=== 0 || n === 0 ) return 0;
  if(m===1 && n === 1) return 1;
  const key = m+','+n;
  if(key in memo) return memo[key]
  let result = gridTraveller(m-1,n,memo) + gridTraveller(m,n-1,memo);
  memo[key] = result;
  return result;
  
}

console.log(gridTraveller(2,3));
console.log(gridTraveller(3,3));
console.log(gridTraveller(18,18));


const canSum = (target, nums, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return true;
  if (target < 0) return false;
  
  for (let num of nums) {
    let remainder = target - num;
    if (canSum(remainder, nums, memo) === true) {
      memo[target] = true;
      return true;
    }
  }
  
  memo[target] = false;
  return false;
}

console.log(canSum(7,[2,3,4,5]));
console.log(canSum(300,[7,14]));


const howSum = (target,nums,memo={}) => {
  if(target in memo) return memo[target];
  if(target === 0) return [];
  if(target < 0) return null;
  for(let num of nums){
    const rem = target - num;
    const res = howSum(rem,nums,memo);
    
    if(res){
      memo[target] = [...res,num];
      return memo[target];
    }
  }
  
  memo[target] = null;
  return null;
}

console.log(howSum(8,[2,3,5]));
console.log(howSum(7,[5,3,4,7]));
console.log(howSum(3,[2,2]));
console.log(howSum(300,[7,14]));


const bestSum = (target,nums,memo={}) => {
  if(target in memo) return memo[target];
  if(target === 0) return [];
  if(target < 0) return null;
  
  let short = null;
  
  for(let num of nums){
    let rem = target - num;
    let res = bestSum(rem,nums,memo);
    if(res){
      
      let combination = [...res,num];
      if(!short){
        short = combination;
      }
      
      if(combination.length < short.length){
        short = combination;
      }
    }
  }
  
  memo[target] = short;
  return memo[target];
}


console.log(bestSum(7,[5,3,4,7]));
console.log(bestSum(8,[2,3,5]));
console.log(bestSum(8,[5,1,4]));
console.log(bestSum(100,[1,2,5,25]));



const canConstruct = (target,words,memo={}) => {
  if(target in memo) return memo[target];
  if(target === '') return true;
  
  for(let word of words){
    if(target.indexOf(word) === 0){
      const suffix = target.slice(word.length);
      if(canConstruct(suffix,words,memo) === true){
        memo[target] = true;
        return true;
      }
    }
  }
  
  memo[target] = false;
  return false;
}

console.log(canConstruct("abcdef",['ab','abc','cd','cde','def','abcd']));

