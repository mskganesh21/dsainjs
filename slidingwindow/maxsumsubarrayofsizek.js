const arr = [2,3,4,5,7,6,9,5,1];
let size = 3;

function maxsubarraysum(arr,size){

//sliding window appproach
let maxsum = 0;
let currsum = 0;

for(let i=0;i<size;i++){
  currsum += arr[i];
}

maxsum = currsum;

for(let i=size;i<arr.length;i++){
  currsum += arr[i] - arr[i-size];
  maxsum = Math.max(maxsum, currsum);
}

return maxsum

}

console.log(maxsubarraysum(arr,size))
