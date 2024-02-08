/*
multply all eloements on the left and all elements on the right
and then multply both the answers to get the result
result[i] = multplyleft * multplyright
*/

function productexceptself(arr){
  let n = arr.length;
  //create an array to store left multiply values
  let left = [];
  // create an array to store right multiply values
  let right = [];
  //first no is 1
  left[0] = 1;
  //last no is 1
  right[n-1] = 1;
  
  for(let i=1;i<n;i++){
    left[i] = left[i-1]* arr[i-1];
  }
  for(let i= n-2;i>=0;i--){
    right[i] = right[i+1] * arr[i+1]
  }
  
  let result = [];
  for(let i=0;i<n;i++){
    result[i] = left[i]* right[i]
  }
  
  return result;
}

const result = productexceptself([2,1,3,4]);
console.log(result)
