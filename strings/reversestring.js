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
