const arr = [1, 2, 3, 4, 5];
const k = 8;

// this is the brute force solution
function rotate(arr, k) {
    
    if(!Array.isArray(arr)){
        return 'Error: it is not an array'
    }
    
    if(isNan(k)){
        return 'Error: it is not a number'
    }
    
    if(arr.length === 0){
        return 'Array should not be empty'
    }
    
  const n = arr.length;
  const result = [];

  // element at the index i+k%n is the solution
  for(let i=0;i<n;i++){
      result[(i+k) % n] = arr[i] 
  }
  
  for(let i=0;i<n;i++){
      arr[i] = result[i]
  }
  return arr;
}

console.log(rotate([...arr], k));
