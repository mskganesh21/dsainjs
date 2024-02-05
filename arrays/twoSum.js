function twoSum(arr, target){
    let n = arr.length;
    
    for(let i=0;i<n-1;i++){
        for(let j=1;j<n;j++){
            if((arr[i] + arr[j]) === target){
                return [i,j]
            }
        }
    }
}

let nums = [2,7,11,15];
let target = 9;

console.log(twoSum(nums,target))
