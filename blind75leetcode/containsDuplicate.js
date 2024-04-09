const containsDuplicate = (nums) => {
  let mySet = new Set(nums);
  return mySet.length !== nums.length;
}

const arr = [1,2,3,1];
console.log(containsDuplicate(arr));
