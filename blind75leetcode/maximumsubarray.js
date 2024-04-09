const maximumsubarray = (nums) => {
  let currmax = nums[0];
  let maximum = nums[0];
  
  for(let i=1;i<nums.length;i++){
    currmax = Math.max(nums[i], (currmax+nums[i]));
    maximum = Math.max(maximum,currmax);
  }
  
  return maximum;
}

const arr = [-2,1,-3,4,-1,2,1,-5,4];

const result = maximumsubarray(arr);
console.log(result);
