function secondLargest(arr){
    let n = arr.length;
    let first = arr[0];
    let second = -Infinity;
    
    if(n < 2){
        return 'Insufficient elements to find second largest element'
    }
    
    for(let i=1;i<n;i++){
        if(arr[i] > first){
            second = first;
            first = arr[i];
        }
        if(arr[i] > second && arr[i] < first){
            second = arr[i]
        }
    }
    
    if(second !== '-Infinity'){
        return second;
    } else {
        return -1;
    }
}

const arr = [1, 2, 3, 4, 5, 3, 4, 3, 4, 2];

let result = secondLargest(arr);
console.log(result);
