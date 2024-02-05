function largestNumber(arr){
    
    if(!Array.isArray(arr)){
        return 'please give us an array'
    }
    
    if(arr.length === 0){
        return 'Array is empty'
    }
    
    let max_num = arr[0];
    
    for(let i=1;i<arr.length;i++){
        if(arr[i] > max_num){
            max_num = arr[i]
        }
    }
    
    return max_num;
}

const arr = [2, 4, 5, 6, 8, 8, 10,10];

const bigno = largestNumber(arr);
console.log(bigno);
