/*
roate array by k positions

simple way

result array 
(i+k) % n

o(1) memory solution

1.reverse the array
2. take the first k elements and reverse them
3. reverse the rest elements


*/


/*
second largest element in array

edge cases
1. repeated 2nd largest element (duplicate)
2. no second largest element

approach 1
1.get largest element in the largest
2. find the largest among remaining

largest element
let lindex = 0;
for(let i=1;i<n;i++){
  if(arr[i] > arr[lindex]){
    largest = i;
  }
}
return lindex

//second largest
let largest = getLargest(arr,n);
let res = -1;
for(let i=0;i<n;i++){
  if(arr[i] !== arr[largest]){
    if(res === -1){
      res = i;
    } else if(arr[i] > arr[res]){
      res = i;
    }
  }
}
return res


approach2 or efficient approach

function secondLargest (arr) {
  let res = -1;
  let largest = 0;
  
  for(let i=1;i<n;i++){
    if(arr[i] > arr[largest]){
      res = largest;
      largest = i;
    } else if(arr[i] !== arr[largest]){
      if(res === -1 || arr[i] > arr[res]){
        res = i;
      }
    }
  }
  return res;
}

*/











