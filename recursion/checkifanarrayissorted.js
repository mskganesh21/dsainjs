// check if an array is sorted or not
// run a loop and with a pointer and compare the current index with the 
//next index if yes move next else false

const arr = [1,2,3,,5,4,5];

function sorted(arr,i){
  if (i === arr.length-1){
    return true
  }
  
  return arr[i] < arr[i+1] && sorted(arr,i+1);
}


const result = sorted(arr,0);

console.log(result);
