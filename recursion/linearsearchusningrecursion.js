// linear search using recursion

const arr = [1,2,3,0,5,4,5];

function linearsearch(arr,i,target){
  if (i === arr.length){
    return -1;
  }
  
  if(arr[i] === target){
    return i;
  }
  
  return linearsearch(arr,i+1,target)
}


const result = linearsearch(arr,0,6);

console.log(result);
