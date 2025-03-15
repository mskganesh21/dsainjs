/*

Find a pair with the given sum in an array

brute force:
run 2 loops 
one from 0 to n-2
2 from i+1 to n-1

if sum is there return the answers
else return no pair found

*/

const arr = [8, 7, 2, 5, 3, 1]
const sum = 10;

const PairSum = (arr,target) => {
  //
  let n = arr.length;
  for(let i=0;i<n-1;i++){
    for(let j=i+1;j<n;j++){
      if((arr[i] + arr[j]) === target){
        return [arr[i], arr[j]]
      }
    }
  }
  
  return [];
}

const result = PairSum(arr,sum);
console.log(result);



/*

using sorting

1. sort the array
2. use 2 pointers

*/

const sort = (arr) => {
  return arr.sort((a,b) => a-b);
}

const PairSumSort = (arr,target) => {
  //step1 sort the array
  let newarr = sort(arr);
  
  //step2
  let left = 0;
  let right = newarr.length - 1;
  
  while(left < right){
    let sum = newarr[left] + newarr[right];
    
    if(sum === target){
      return [newarr[left], newarr[right]]
    }
    
    if(sum > target){
      right--;
    }
    
    if(sum < target){
      left++;
    }
  }
  
  return []
}

const result2 = PairSumSort(arr,sum);
console.log(result2)

/*

using hashing
step1: create a hashmap to store the 
array values as keys and the indices 
as the values

step2: 
for each element calculate the complement
and if it does exist return the indices



*/

const PairSumHashing = (arr,target) => {
  
  //
  
  let map = {};
  
  for(let i=0;i<arr.length;i++){
    let complement = target - arr[i];
    
    if(complement in map){
      return [complement, arr[i]]
    } else {
      map[arr[i]] = i;
    }
  }
  
  return [];
  
  
}


const result3 = PairSumHashing(arr,sum);
console.log(result3);





















