/*
bubble sort

pushes the max to the end but adjacent swapping

compares 2 adjacent elements and swaps it if necessary

after 1 iteration we get the largest element at the end

complete this step again and again and so on ....

if there are 5 elements then there are 4 passes

tc: O(n^2) worst
tc: O(n^2) average
tc: O(n) best
*/


const BubbleSort = (arr) => {
  let n = arr.length;
  /*
  start from 0 and go till n-1 for first
  start from 0 and go till n-2 for next
  so we can do this by n-1 to 1 loop
  */
  for(let i=n-1;i>=1;i--){
    let noSwaps = true;
    //loop from 0 to i-1 element
    for(let j=0;j<=i-1;j++){
      if(arr[j] > arr[j+1]){
        noSwaps = false;
        //swap
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
    
    if(noSwaps === true){
      break;
    }
  }
  
  return arr;
}

let arr = [6, 5, 4, 3, 1, 2];
console.log(BubbleSort(arr));




