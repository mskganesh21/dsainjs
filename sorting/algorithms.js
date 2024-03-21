/*
SELECTION SORT
*/

function selectionSort(arr){
  const n = arr.length;
  for(let i=0;i<n;i++){
    let minIndex = i;
    for(let j=i+1;j<n;j++){
      if(arr[j] < arr[minIndex]){
        minIndex = j;
      }
    }
    if(minIndex !== i){
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  
  return arr;
}

const result = selectionSort([1,3,4,5,7,2,3]);
console.log(result)



function bubblesort(arr){
  //bubble SORt
  //compares 2 elements and swaps them
  //highest element is put at the end of the array
  let n = arr.length;
  for(let i=0;i<n;i++){
    for(let j=0;j<n-i-1;j++){
      if(arr[j] > arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp
      }
    }
  }
  
  return arr;
}

const result2 = bubblesort([3,2,1,3,4,5,6]);
console.log(result2)







