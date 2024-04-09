

/*
store the array values in a map or object and then find the compliment from the map and return the indices
*/

const TwoSum = (nums,target) => {
  const myMap = new Map();
  
  for(let i=0;i<nums.length;i++){
    const compliment = target - nums[i];
    if(myMap.has(compliment)){
      return [i,myMap.get(compliment)]
    } else {
      myMap.set(nums[i], i);
    }
  }
}

const arr = [2,7,11,15];
const result = TwoSum(arr, 9);
console.log(result)
