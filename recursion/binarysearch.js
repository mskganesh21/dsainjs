const arr = [5,6,7,8,9,1,2,3];

function binarysearch(arr,target,s,e){
  if(s>e){
    return -1;
  }
  
  let m = Math.floor(s + (e-s) / 2);
  if(arr[m] === target){
    return m
  }
  
  if(arr[s] <= arr[m]){
    if(target >= arr[s] && target <= arr[m]){
      return  binarysearch(arr,target,s,m-1);
    } else {
      return binarysearch(arr,target,m+1,e);
    }
  }
  
  if(target >= arr[m] && target <= arr[e]){
    return binarysearch(arr,target,m+1,e)
  } else {
    return binarysearch(arr,target,s,m-1);
  }
}

const result = binarysearch(arr,9,0,arr.length-1);
console.log(result);
