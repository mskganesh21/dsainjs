//selection Sort algorithm

// smallest element is put at the front

function selectionsort(arr){
  let n = arr.length;
  for(let i=0;i<n;i++){
    let min = i;
    for(let j=i+1;j<n;j++){
      if(arr[j] < arr[min]){
        min = j;
      }
      if(min !== i){
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
      }
    }
  }
  return arr;
}

const arr = [10,29,11,7,35,7];

console.log(selectionsort(arr));
