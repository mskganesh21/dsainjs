//insertion Sort algorithm

// small part of array is sorted then new new next element is inserted
// at the specified index.

function Insertionsort(arr){
  let n = arr.length;
  for(let i=1;i<n;i++){
    let key = arr[i];
    let j = i-1;
    while(j >= 0 && arr[j] > key){
        arr[j+1] = arr[j];
        j--;
    }
    arr[j+1] = key;
  }
  return arr;
}

const arr = [10,29,11,3,35,7];

console.log(Insertionsort(arr));
