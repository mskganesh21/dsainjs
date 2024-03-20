/*
SEARCH ALGORITHMS
*/

// LINEAR SEARCH

function linerSearch(arr,target){
  for(let i=0;i<arr.length;i++){
    if(target === arr[i]){
      return i;
    }
  }
  
  return -1;
}

const result = linerSearch([4,5,6,7,0,1,2], 3);
console.log(result);

//global linear search

function GlobalLinerSearch(arr,target){
  let resultarr = []
  for(let i=0;i<arr.length;i++){
    if(target === arr[i]){
      resultarr.push(i)
    }
  }
  
  if(resultarr.length === 0){
    return -1;
  } else {
    return resultarr
  }
}

const result1 = GlobalLinerSearch([4,5,6,7,7,0,1,2], 7);
console.log(result1);


/*
BINARY SEARCH ALGORITHM
in order for binary search to work the array has to be sorted
o(log n)
*/

function binarySearch(nums,target){
  let s = 0;
  let e = nums.length -1;
  
  while(s<=e){
    let m = Math.floor((s+e) / 2);
    if(nums[m] === target) {
      return m
    } else if (nums[m] < target) {
      s = m +1;
    } else {
      e = m-1;
    }
  }
  
  return -1
}

const result2 = binarySearch([-1,0,3,5,9,12], 9);
console.log(result2)


