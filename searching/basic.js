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







