//merge sort
// divide array in 2 small arrays aqnd sort them independently
// further break them down and do this using recursion


function mergesort(arr){
    if(arr.length <= 1){
      return arr;
    }
    
    let mid = Math.floor(arr.length / 2);
    
    let left = mergesort(arr.slice(0,mid));
    let right = mergesort(arr.slice(mid));
    
    return merge(left,right);
}

function merge(left,right){
  let sortedarr = [];
  
  while(left.length && right.length){
    if(left[0] < right[0]){
      sortedarr.push(left.shift())
    } else {
      sortedarr.push(right.shift())
    }
  }
  
  return [...sortedarr, ...left, ...right];
}

const arr = [8,3,6,6,5,4,7,1];

console.log(mergesort(arr))
