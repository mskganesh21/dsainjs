function subArray(arr){

// to find the max sum possible
let maxSoFar = arr[0];
//to store the maximum sum found at a position
let currmax = arr[0];

for(let i=1;i<arr.length;i++){
    currmax = Math.max(arr[i], (arr[i] + currmax));
    maxSoFar = Math.max(currmax, maxSoFar);
}
return maxSoFar
}


const arr = [-2,1,-3,4,-1,2,1,-5,4];

const result = subArray(arr);
console.log(result)
