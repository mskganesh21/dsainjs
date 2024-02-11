//bubble Sort algorithm

// highest element is put at the end in each StopIteration

function bubblesort(arr){
  let n = arr.length;
  for(let i=0;i<n;i++){
    for(let j=0;j<n-1-i;j++){
      if(arr[j] > arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

const arr = [10,29,11,7,35,7];

console.log(bubblesort(arr));
