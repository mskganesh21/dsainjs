const arr = [2,3,4,5,7,6,9,5,1];
let size = 3;

function maxsubarraysum(arr,size){
  let n = arr.length;
  let max = -Infinity
  for(let i=0;i<n;i++){
    let sum = 0
    for(let j=i;j<i+3;j++){
       sum = arr[j] + arr[j+1] + arr[j+2]
    }
    if(sum > max){
      max = sum;
    }
  }
  
  return max;
}

console.log(maxsubarraysum(arr,size))
