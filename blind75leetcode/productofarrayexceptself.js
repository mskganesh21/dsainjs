

const productofarrayexceptself = (nums) => {
  // let forwardArr = [];
  let res = [];
  let start = 1;
  
  for(let i=0;i<nums.length;i++){
    // forwardArr.push(start);
    res.push(start)
    start = start * nums[i];
  }
  
  // let res = [];
  let start2 = 1;
  
  for(let i=nums.length-1;i>=0;i--){
    // res.unshift(start2*forwardArr[i]);
    res[i] = start2 * res[i]
    start2 = start2*nums[i]
  }
  
  return res;
}

const result = productofarrayexceptself([1,2,3,4]);
console.log(result)
