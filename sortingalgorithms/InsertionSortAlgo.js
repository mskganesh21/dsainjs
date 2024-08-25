/*
Insertion sort

takes an element and places it in the correct order

start the loop from 1 and go till last element

keep j starting from i

go backwards and swap the elements accordingly till
all elements are sorted in place

tc: O(n^2) worst and avg case

tc: O(n) best case

*/


const InsertionSort = (arr) => {
  let n = arr.length;
  
  for(let i = 1; i < n; i++){  
    let j = i;
    while(j > 0 && arr[j-1] > arr[j]){
      // Swap arr[j] and arr[j-1]
      let temp = arr[j];
      arr[j] = arr[j-1];
      arr[j-1] = temp;
      j--;
    }
  }
  
  return arr;
}

let arr = [6, 5, 4, 3, 1, 2];
console.log(InsertionSort(arr)); 
