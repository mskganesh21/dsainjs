/*
SLIDING WINDOW PATTERN

given an array , find the average of all contiguous subarrays of size K

*/

const arr = [1,2,3,4,5];
const k =3;

function avgsubarray(arr,k){
    const averages = [];
    
    for(let i=0;i<=arr.length-k;i++){
      let sum = 0;
      for(let j=0;j<k;j++){
        sum = sum + arr[i+j];
      }
      averages.push(sum/k);
    }
    return averages
}

console.log(avgsubarray(arr,k));
console.log(avgsubarray([1,3,2,6,-1,4,1,8,2],5));


function subArraySum(arr, k) {
  let averages = [];
  let windowStart = 0;
  let windowSum = 0;
  
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    
    if (windowEnd >= k - 1) {
      averages.push(windowSum / k);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  
  return averages;
}

console.log(subArraySum([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));
















