//second largest number

const arr = [1,2,3,4,5,3,4,3,4,2];

function largestNumber (arr){
    
    //edge cases
    
    if(!Array.isArray(arr)){
        return 'Please enter an array'
    }
    
    if(arr.length === 0){
        return 'Please enter a valid array'
    }
    
    //all elements are the same
    if(arr.every(element => element === arr[0])){
        return 'All elements are the same'
    }
    
    let n = arr.length;
    let largest = arr[0];
    
    for(let i=1;i<n;i++){
        if(arr[i] > largest){
            largest = arr[i]
        }
    }
    
    return largest;
}

// let result = largestNumber(arr);

// console.log(result);


function secondLargest (arr) {
    let n = arr.length;
    let largest = largestNumber(arr);
    
    let result = -Infinity;
    for(let i=0;i<n;i++){
        if(arr[i] < largest && arr[i] > result){
            result = arr[i];
        }
    }
    
    if(result === -Infinity){
        return -1;
    }
    
    return result;
}

let sec = secondLargest(arr);

console.log(sec);
