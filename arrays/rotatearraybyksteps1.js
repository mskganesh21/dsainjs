const arr = [1, 2, 3, 4, 5];
const k = 8;
// reverse the array first
// reverse elements from 0 to k-1 
// reverse elements from k to n-1

function rotate(arr, k) {
    
    if(!Array.isArray(arr)){
        return 'Error: it is not an array'
    }
    
    if(typeof k !== 'number'){
        return 'Error: it is not a number'
    }
    
    if(arr.length === 0){
        return 'Array should not be empty'
    }
    
  const n = arr.length;
    k = k%n;
    let l=0;
    let r = n-1;
    while(l < r){
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
    
    l=0;
    r=k-1;
    while(l < r){
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
    
    l=k;
    r=n-1;
        while(l < r){
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
    
    return arr;
}

console.log(rotate([...arr], k));
