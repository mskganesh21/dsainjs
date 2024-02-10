function reverseString(arr){
    let n = arr.length;
    let i=0;
    let j=n-1;
    while(i<j){
      let temp = arr[i];
       arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
    
    return arr;
}

const str = ['h', 'e', 'l', 'l', 'o'];

console.log(reverseString(str));

const str1 = ['h', 'e', 'l', 'l', 'o'];


function stackreverseString(arr){
  let stack = [];
  let n = arr.length;
  for(let i=0;i<n;i++){
    stack.push(arr[i]);
  }
  for(let i=0;i<n;i++){
    let el = stack.pop();
    arr[i] = el;
  }
  
  return arr;
}

console.log(stackreverseString(str1));


str2 = ['h', 'e', 'l', 'l', 'o'];

function reverseStringrecursive(arr,l,r){
  if(l < r){
    return arr;
  }
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return reverseStringrecursive(arr,l+1,r-1);
}

console.log(reverseStringrecursive(str2,0,str2.length-1));
